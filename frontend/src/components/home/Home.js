import React, {useEffect} from "react";

import api from "config/axiosConfig";
import Checkin from "./Checkin";

const Home = () => {
    const test = async () => {
        const res = await api.get("/lock");
        console.log(res);
    }

    useEffect(() => {
        test();
    }, []);

    return <article className="p-5">
        <Checkin />
    </article>
}

export default Home;