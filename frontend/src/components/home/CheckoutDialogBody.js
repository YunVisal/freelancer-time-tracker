import React from "react";
import format from "date-fns/format";

import PrimaryActionButton from "components/reuseable/PrimaryActionButton";
import SecondaryActionButton from "components/reuseable/SecondaryActionButton";

const CheckoutDialogBody = ({checkoutTime, totalWorkingHour, handleCloseDialog, handleClockout}) => {

    return <div className="space-y-5">
        <div className="text-center">
            <h2 className="text-3xl font-semibold">Clock out</h2>
            <p className="text-xl">Thank you for your work today!</p>
        </div>
        <ul className="space-y-3">
            <li className="flex justify-between items-center">
                <h3 className="w-3/12">Checkin Time</h3>
                <p className="w-1/12">:</p>
                <h3 className="w-8/12">{checkoutTime ? format(checkoutTime, "dd/MM/yyyy hh:mm") : ""}</h3>
            </li>
            <li className="flex justify-between items-center">
                <h3 className="w-3/12">Total Working Time</h3>
                <p className="w-1/12">:</p>
                <h3 className="w-8/12">{totalWorkingHour}</h3>
            </li>
        </ul>
        <p className="text-primary text-center font-semibold">Are you sure you want to clock out now?</p>
        <div className="w-1/2 m-auto flex justify-between items-center">
            <div className="w-1/3">
                <SecondaryActionButton isButton={true} onClick={handleCloseDialog}>
                    <p className="p-2 text-lg font-bold lg:p-3 lg:text-xl">No</p>
                </SecondaryActionButton>
            </div>
            <div className="w-1/3">
                <PrimaryActionButton isButton={true} onClick={handleClockout}>
                    <p className="p-2 text-lg font-bold lg:p-3 lg:text-xl">Yes</p>
                </PrimaryActionButton>
            </div>
        </div>
    </div>
}

export default CheckoutDialogBody;