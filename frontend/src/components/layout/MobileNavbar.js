import React from "react";
import {BiHome, BiFile} from "react-icons/bi";

import NavigationLink from "components/reuseable/NavigationLink";

const MobileNavbar = () => {
    return <nav className="flex lg:hidden fixed bottom-0 w-full px-5 py-3 border-t border-secondary">
        <div className="w-1/2 m-auto">
            <NavigationLink link={"/"}>
                <div className="w-fit m-auto">
                    <BiHome size={30} className="m-auto" />
                    <p className="text-sm">Home</p>
                </div>
            </NavigationLink>
        </div>
        <div className="w-1/2 m-auto">
            <NavigationLink link={"/report"}>
                <div className="w-fit m-auto">
                    <BiFile size={30} className="m-auto" />
                    <p className="text-sm">Report</p>
                </div>
            </NavigationLink>
        </div>
    </nav>
}

export default MobileNavbar;