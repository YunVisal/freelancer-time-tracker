import React, {useState, useCallback, useEffect} from "react";
import { format } from "date-fns";

const WelcomeText = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const refreshTime = () => {
        setInterval(() => {
            setCurrentDateTime(new Date());
        }, 10000);
    }
    const callRefreshTime = useCallback(refreshTime, [refreshTime]);

    const renderGreetingText = () => {
        const currentHour = currentDateTime.getHours();

        if(currentHour >= 3 && currentHour < 12){
            return "Good Morning!";
        }
        else if(currentHour >= 12 && currentHour < 18){
            return "Good Afternoon!";
        }
        else {
            return "Good Evening!";
        }
    }

    useEffect(() => {
        callRefreshTime();

        return () => {
            clearInterval();
        }
    }, [callRefreshTime]);

    return <>
        <h2 className="lg:text-3xl text-2xl text-primary font-bold text-center">{renderGreetingText()}</h2>
        <h3 className="text-lg text-secondary text-center">{format(currentDateTime, "dd/MM/yyyy hh:mm")}</h3>
    </>
}

export default WelcomeText;