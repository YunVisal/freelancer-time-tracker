import React from "react";

const PrimaryActionButton = ({label, isButton, onClick}) => {
    return <button 
        className={`
            w-full h-full outline-none bg-primary text-white p-2 text-lg font-bold rounded-lg
            lg:p-3 lg:text-xl
            hover:bg-white hover:text-primary hover:border hover:border-primary
        `}
        type={isButton ? "button" : "submit"}
        onClick={onClick}
    >
        {label}
    </button>
}

export default PrimaryActionButton;