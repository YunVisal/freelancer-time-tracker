import React from "react";
import {FcGoogle} from "react-icons/fc";

import PrimaryActionButton from "components/reuseable/PrimaryActionButton";

const LoginForm = () => {
    const submitLogin = (e) => {
        e.preventDefault();
        window.location.replace("/");
    }

    return <article className="lg:w-1/2 w-[90%] h-[40vh] bg-white m-auto p-3 text-center shadow-lg rounded-lg flex flex-col justify-between">
        <section>
            <h1 className="text-xl lg:text-3xl font-bold text-primary">Freelancer Time Tracker</h1>
            <p>Working time tracker for Freelancer</p>
        </section>
        <form onSubmit={submitLogin}>
            <div className="lg:w-1/2 w-full m-auto">
                <PrimaryActionButton isButton={false}>
                    <div className="p-1 flex justify-start items-center">
                        <div className="bg-white w-1/6 p-1 flex flex-col justify-center">
                            <FcGoogle size={30} className="m-auto" />
                        </div>
                        <p className="w-full">Login with Google</p>
                    </div>
                </PrimaryActionButton>
            </div>
        </form>
        <h2>Copyright 2023</h2>
    </article>
}

export default LoginForm;