import React, {useEffect} from "react";

import { refreshAccessToken } from "utilities/token";

const LoginCallback = () => {
    const refreshToken = async () => {
        try {
            await refreshAccessToken();
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