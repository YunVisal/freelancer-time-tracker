import React, { useRef, useEffect } from "react";

const MessageDialog = ({ isOpen, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        if (isOpen) {
            modalRef.current.classList.remove("hidden");
        }
        else {
            modalRef.current.classList.add("hidden");
        }
    }, [isOpen]);

    return <div ref={modalRef} className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
        <div className="w-[90%] lg:w-1/2 p-5 bg-white z-10">
            {children}
        </div>
    </div>
}

export default MessageDialog;