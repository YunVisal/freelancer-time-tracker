import React, {useEffect, useState} from "react";
import {FcGoogle} from "react-icons/fc";
import { useSearchParams } from "react-router-dom";

import PrimaryActionButton from "components/reuseable/PrimaryActionButton";

const LoginForm = () => {
    const [searchParams] = useSearchParams();
    const [errorMsg, setErrorMsg] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();
        window.location.replace("http://localhost:3001/auth/google");
    }

    useEffect(() => {
        if(searchParams.get("error")) setErrorMsg("Something went wrong!")
    }, [searchParams]);

    return <form onSubmit={submitLogin}>
            <div className="lg:w-1/2 w-full m-auto">
                <PrimaryActionButton isButton={false}>
                    <div className="p-1 flex justify-start items-center">
                        <div className="bg-white w-1/6 rounded-md p-1 flex flex-col justify-center">
                            <FcGoogle size={30} className="m-auto" />
                        </div>
                        <p className="w-full">Login with Google</p>
                    </div>
                </PrimaryActionButton>
                <p className="text-[#ff0000]">{errorMsg}</p>
            </div>
        </form>
}

export default LoginForm;