import React from "react";
import HomeIcon from "@mui/icons-material/Home";

const DashboardBtn = () => {
return (
    <button className="flex font-bold flex-row gap-[0.2rem] items-center border justify-center w-full h-12 p-[0.5rem] rounded-lg bg-primary hover:bg-hover-layer transform hover:ease-in duration-200">
        <div className="p-[0.2rem] bg-foreground rounded-2xl flex items-center ">
            <HomeIcon className="text-button"/>
        </div>
        <span className="text-h2">Dashboard</span>
    </button>
);
};

export default DashboardBtn;
