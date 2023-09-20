import axios from "axios";

import { apiBaseUrl } from "config";

let accessToken = "";

const verifyRefreshToken = async () => {
    try {
        await axios.get(`${apiBaseUrl}/verify`, {withCredentials: true});
    } catch(e){
        throw e;
    }
}

const refreshAccessToken = async () => {
    try {
        const res = await axios.get(`${apiBaseUrl}/refresh`, {withCredentials: true});
        accessToken = res.data.accessToken;
    } catch(e){
        throw e;
    }
}

const getAccessToken = () => accessToken;

export {
    refreshAccessToken,
    verifyRefreshToken,
    getAccessToken
}