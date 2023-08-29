import React from "react";
import NavigationLink from "components/reuseable/NavigationLink";

const DesktopNavbar = () => {
    return <nav className="hidden lg:flex px-5 lg:px-10 py-3 shadow-lg space-x-10">
        <div className="w-1/6">
            <NavigationLink link={"/"}>Home</NavigationLink>
        </div>
        <div className="w-1/6">
            <NavigationLink link={"/report"}>Report</NavigationLink>
        </div>
    </nav>
}

export default DesktopNavbar;