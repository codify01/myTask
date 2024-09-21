import React from "react";
import img1 from "../assets/images/img1.jpeg";
import { MdSpaceDashboard, MdGroups2, MdCardMembership } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const eachTask = [
    {
        href: "/user",
        title: "Dashboard",
        icon: <MdSpaceDashboard className="size-6" />
    },
    {
        href: "/team",
        title: "Teams",
        icon: <MdCardMembership className="size-6" />
    },
    {
        href: "/groups",
        title: "Groups",
        icon: <MdGroups2 className="size-6" />
    }
];

const LeftBar = () => {
    return (
        <div className="hidden md:block space-y-5 relative bg-accent-white dark:bg-accent-black dark:text-accent-white w-1/5 h-[92vh] border-r border-neutral-400 dark:border-neutral-500 px-5 py-5">

            <div className="flex flex-col leading-tight items-center w-full text-center">
                <img src={img1} alt="User profile" className="w-[80px] h-[80px] rounded-full object-cover" />
                <h3 className="font-bold text-lg truncate w-11/12">Adeleke Oluwamayokun</h3>
                <small className="truncate w-11/12 text-xs">adelekeoluwamayokun27@gmail.com</small>
            </div>

            <div className="space-y-4 h-3/4">
                <ul className="overflow-y-scroll hover:shadow-accent-white">
                    {
                        eachTask.map(({ href, title, icon }, index) => (
                            <NavLink 
                                to={href} 
                                key={index} 
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-pry text-pry'
                                        : 'text-neutral-500 hover:bg-pry hover:text-accent-white transition-all duration-300'
                                }
                            >
                                <div className="flex items-center gap-3 mb-3 font-medium text-base ms-2  rounded-md py-4 px-2 hover:opacity-100">
                                    {icon}
                                    <li className="">{title}</li>
                                </div>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>

            <Link to="/logout" className="absolute left-5 bottom-5 flex gap-2 items-center font-semibold text-neutral-500 hover:text-neutral-500/60">
                <span>Log Out</span>
                <IoLogOut className="size-6" />
            </Link>
        </div>
    );
};

export default LeftBar;
