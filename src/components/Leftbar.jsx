import React from "react";
import img1 from "../assets/images/img1.jpeg";
import { MdSpaceDashboard, MdGroups2, MdCardMembership, MdAssignment,MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const eachTask = [
    {
        href: "/user/dashboard",
        title: "Dashboard",
        icon: <MdSpaceDashboard className="size-6" />
    },
    {
        href: "/admin/add-user",
        title: "Create user",
        icon: <IoCreate className="size-6" />
    },
    {
        href: "/admin/assign-task",
        title: "Assign task",
        icon: <MdAssignment className="size-6" />
    },
    {
        href: "/team",
        title: "Team Member",
        icon: <MdCardMembership className="size-6" />
    },
    {
        href: "/profile",
        title: "Profile",
        icon: <FaUser className="size-6" />
    },
    {
        href: "/groups",
        title: "Groups",
        icon: <MdGroups2 className="size-6" />
    },
    {
        href: "/admin/tasks",
        title: "Pending task",
        icon: <MdPendingActions className="size-6" />
    },
];

const LeftBar = () => {
    const ignoredPages = ['/', '/login']
    const location = useLocation()
	const isHere = ignoredPages.includes(location.pathname)
    return (
        !isHere?
        <div className="hidden md:block space-y-5 relative bg-accent-white dark:bg-accent-black dark:text-accent-white w-1/5 h-[92vh] border-r border-neutral-400 dark:border-neutral-500 px-5 py-5">

            <div className="flex flex-col leading-tight items-center w-full text-center">
                <img src={img1} alt="User profile" className="w-[80px] h-[80px] rounded-full object-cover" />
                <h3 className="font-bold text-lg truncate w-11/12">Adeleke Oluwamayokun</h3>
                <small className="truncate w-11/12 text-xs">adelekeoluwamayokun27@gmail.com</small>
            </div>

            <div className="space-y-4 overflow-y-auto h-3/4">
                <ul className="pb-5 hover:shadow-accent-white">
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

            <Link to="/logout" className="absolute bg-accent-black border-t border-neutral-700 ps-2 w-full left-0 bottom-0 h-[40px] flex gap-2 items-center font-semibold text-neutral-500 hover:text-neutral-500/60">
                <span>Log Out</span>
                <IoLogOut className="size-6" />
            </Link>
        </div>
        : null
    );
};

export default LeftBar;
