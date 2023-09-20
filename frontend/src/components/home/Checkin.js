import React, {useCallback, useEffect, useState} from "react";
import { format } from "date-fns";
import api from "config/axiosConfig";

import PrimaryActionButton from "components/reuseable/PrimaryActionButton";

const Checkin = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const test = async () => {
        const res = await api.get("/lock");
        console.log(res);
    }

    const refreshTime = () => {
        setInterval(() => {
            setCurrentDateTime(new Date());
        }, 10000);
    }
    const callRefreshTime = useCallback(refreshTime, [refreshTime]);

    const renderGreetingText = () => {
        const currentHour = currentDateTime.getHours();

        if(currentHour >= 3 || currentDateTime < 12){
            return "Good Morning!";
        }
        else if(currentHour >= 12 || currentDateTime < 18){
            return "Good Afternoon!";
        }
        else {
            return "Good Evening!";
        }
    }

    const clockIn = (e) => {
        e.preventDefault();
        console.log("Clock in");
        test();
    } 

    useEffect(() => {
        callRefreshTime();

        return () => {
            clearInterval();
        }
    }, [callRefreshTime])

    return <section className="lg:w-1/2 w-full m-auto">
        <h2 className="lg:text-3xl text-2xl text-primary font-bold text-center">{renderGreetingText()}</h2>
        <h3 className="text-lg text-secondary text-center">{format(currentDateTime, "dd/MM/yyyy hh:mm")}</h3>
        <form className="lg:w-1/4 w-1/2 mx-auto my-4" onSubmit={clockIn}>
            <PrimaryActionButton isButton={false}>
                <p className="p-2 text-lg font-bold lg:p-3 lg:text-xl">Clock in</p>
            </PrimaryActionButton>
        </form>
    </section>
}

export default Checkin;