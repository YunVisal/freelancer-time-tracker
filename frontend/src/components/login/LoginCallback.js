import React, {useEffect} from "react";
import axios from "axios";

const LoginCallback = () => {
    const refreshToken = async () => {
        try {
            const res = await axios.get("http://localhost:3001/refresh", {withCredentials: true});
            localStorage.setItem("accessToken", res.data.accessToken);
            window.location.replace("/");
        } catch(e){
            window.location.replace("/login?error=true");
        }
    }

    useEffect(() => {
        refreshToken();
    }, []);

    return <h1>Hello!</h1>
}

export default LoginCallback;