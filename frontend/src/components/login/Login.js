import React from "react";

import LoginForm from "./LoginForm";

const Login = () => {
    return <main className="h-screen bg-[#fcfcfc] flex flex-col justify-center">
        <article className="lg:w-1/2 w-[90%] h-[40vh] bg-white m-auto p-3 text-center shadow-lg rounded-lg flex flex-col justify-between">
            <section>
                <h1 className="text-xl lg:text-3xl font-bold text-primary">Freelancer Time Tracker</h1>
                <p>Working time tracker for Freelancer</p>
            </section>
            <LoginForm />
            <h2>&copy; Copyright 2023</h2>
        </article>
    </main>
}

export default Login;