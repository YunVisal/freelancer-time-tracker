import axios from "axios";

let accessToken = "";

const refreshAccessToken = async () => {
    try {
        const res = await axios.get("http://localhost:3001/refresh", {withCredentials: true});
        accessToken = res.data.accessToken;
    } catch(e){
        throw e;
    }
}

const getAccessToken = () => accessToken;

export {
    refreshAccessToken,
    getAccessToken
}