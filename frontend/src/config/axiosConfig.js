import axios from "axios";
import { apiBaseUrl } from "config";
import { getAccessToken, refreshAccessToken } from "utilities/token";

const api = axios.create({
    baseURL: apiBaseUrl,
    timeout: 2000,
});

api.interceptors.request.use(
    config => {
        config.headers["Authorization"] = `Bearer ${getAccessToken()}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            try {
                originalRequest._retry = true;
                await refreshAccessToken();
                return api(originalRequest);
            } catch (e) {
                window.location.replace("/login");
            }
        }
        else {
            return Promise.reject(error);
        }
    }
);

export default api;
