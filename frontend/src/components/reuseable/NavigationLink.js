import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({link, children}) => {
    return <NavLink 
        to={link}
        className={({ isActive }) => `block w-full ${isActive ? "text-primary" : "text-secondary"} font-bold text-lg text-center`}
    >
        {children}
    </NavLink>
}

export default NavigationLink;