import React, {useCallback, useEffect} from "react";

import { verifyRefreshToken } from "utilities/token";
import Checkin from "./Checkin";

const Home = () => {
    const verifyToken = async () => {
        try {
            await verifyRefreshToken();
        } catch(e) {
            window.location.replace("/login");
        }
    }
    const callVerifyToken = useCallback(verifyToken, []);

    useEffect(() => {
        callVerifyToken();
    }, [callVerifyToken]);
    
    return <article className="p-5">
        <Checkin />
    </article>
}

export default Home;