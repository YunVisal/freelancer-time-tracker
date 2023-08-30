import React from "react";

const PrimaryActionButton = ({isButton, onClick, children}) => {
    return <button 
        className={`
            w-full h-full outline-none bg-primary text-white rounded-lg
            hover:bg-white hover:text-primary hover:border hover:border-primary
        `}
        type={isButton ? "button" : "submit"}
        onClick={onClick}
    >
        {children}
    </button>
}

export default PrimaryActionButton;