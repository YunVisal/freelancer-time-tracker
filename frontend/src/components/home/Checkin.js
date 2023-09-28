import React, {useCallback, useEffect, useState} from "react";

import api from "config/axiosConfig";
import WelcomeText from "./WelcomeText";
import CheckoutDialogBody from "./CheckoutDialogBody";
import MessageDialog from "components/reuseable/MessageDialog";
import PrimaryActionButton from "components/reuseable/PrimaryActionButton";
import SecondaryActionButton from "components/reuseable/SecondaryActionButton";

const Checkin = () => {
    const [sessionId, setSessionId] = useState(-1);
    const [checkinTime, setCheckinTime] = useState(null);
    const [checkoutTime, setCheckoutTime] = useState(null);
    const [totalWorkingTime, setTotalWorkingTime] = useState("");
    const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

    const checkForCurrentSession = async () => {
        try {
            const res = await api.get("/workingStatus");
            setSessionId(res.data.data.id);
            setCheckinTime(new Date(res.data.data.checkInTime))
        }catch(e) {}
    }
    const callCheckForCurrentSession = useCallback(checkForCurrentSession, []);

    const handleCheckIn = async (e) => {
        e.preventDefault();
        if(sessionId === -1){
            const date = new Date();
            const body = {
                checkInTime: date.toISOString()
            };
            const res = await api.post("/checkin", body);
            setSessionId(res.data.data.id);
        }
        else {
            const date = new Date();
            const timeDifferences = date - checkinTime;
            const hours = Math.floor(timeDifferences / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((timeDifferences % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((timeDifferences % (1000 * 60)) / 1000).toString().padStart(2, '0');
            const totalHourString = `${hours}:${minutes}:${seconds}`;
            setCheckoutTime(date);
            setTotalWorkingTime(totalHourString);
            setIsCheckoutClicked(true);
        }
    } 

    const handleCheckOut = async () => {
        setIsCheckoutClicked(false);
        const body = {
            id: sessionId,
            checkOutTime: checkoutTime.toISOString()
        };
        await api.post("/checkout", body);
        setSessionId(-1);
        setCheckinTime(null);
    }

    const closeDialog = () => {
        setIsCheckoutClicked(false);
    }

    useEffect(() => {
        callCheckForCurrentSession();
    }, [callCheckForCurrentSession]);

    return <section className="lg:w-1/2 w-full m-auto">
        <WelcomeText />
        <form className="lg:w-1/4 w-1/2 mx-auto my-4" onSubmit={handleCheckIn}>
            {sessionId === -1 ? <PrimaryActionButton isButton={false}>
                <p className="p-2 text-lg font-bold lg:p-3 lg:text-xl">Clock in</p>
            </PrimaryActionButton>
            : <SecondaryActionButton isButton={false}>
                <p className="p-2 text-lg font-bold lg:p-3 lg:text-xl">Clock out</p>
            </SecondaryActionButton>}
        </form>
        <MessageDialog isOpen={isCheckoutClicked}>
            <CheckoutDialogBody
                checkoutTime={checkoutTime}
                totalWorkingHour={totalWorkingTime}
                handleCloseDialog={closeDialog}
                handleClockout={handleCheckOut}
            />
        </MessageDialog>
    </section>
}

export default Checkin;