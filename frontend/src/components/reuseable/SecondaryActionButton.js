import React from "react";

const SecondaryActionButton = ({isButton, onClick, children}) => {
    return <button 
        className={`
            w-full h-full outline-none bg-white text-black rounded-lg border border-secondary
            hover:bg-white hover:text-primary hover:border hover:border-primary
        `}
        type={isButton ? "button" : "submit"}
        onClick={onClick}
    >
        {children}
    </button>
}

export default SecondaryActionButton;