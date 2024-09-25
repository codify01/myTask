import React, { useEffect, useState } from "react";
import img1 from "../assets/images/img1.jpeg";
import { MdSpaceDashboard, MdGroups2, MdCardMembership, MdAssignment, MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCreate, IoLogOut } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";


const eachTask = [
    {
        href: "/user/dashboard",
        title: "Dashboard",
        icon: <MdSpaceDashboard className="size-6" />,
        roles: ["admin", "user"]
    },
    {
        href: "/admin/add-user",
        title: "Create user",
        icon: <IoCreate className="size-6" />,
        roles: ["admin"]
    },
    {
        href: "/admin/assign-task",
        title: "Assign task",
        icon: <MdAssignment className="size-6" />,
        roles: ["admin"]
    },
    {
        href: "/team",
        title: "Team Member",
        icon: <MdCardMembership className="size-6" />,
        roles: ["admin", "user"]
    },
    {
        href: "/profile",
        title: "Profile",
        icon: <FaUser className="size-6" />,
        roles: ["admin", "user"]
    },
    {
        href: "/groups",
        title: "Groups",
        icon: <MdGroups2 className="size-6" />,
        roles: ["user"]
    },
    {
        href: "/admin/pending-task",
        title: "Pending task",
        icon: <MdPendingActions className="size-6" />,
        roles: ["admin"]
    },
];

const LeftBar = () => {
    const [sessionData, setSessionData] = useState(null);
    const location = useLocation();
    const ignoredPages = ['/', '/login', '/about', '*'];
    const isHere = ignoredPages.includes(location.pathname);
    const [currentUserRole, setCurrentUserRole] = useState()

    // Fetch user data from localStorage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setSessionData(JSON.parse(storedUser));
            setCurrentUserRole(JSON.parse(storedUser).type)
        }
    }, []);

    const filteredTasks = eachTask.filter(task => task.roles.includes(currentUserRole));

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        !isHere && sessionData ? (
            <div className="hidden md:block space-y-5 relative bg-accent-white dark:bg-accent-black dark:text-accent-white w-1/5 h-[92vh] border-r border-neutral-400 dark:border-neutral-500 px-5 py-5">
                <div className="flex flex-col leading-tight items-center w-full text-center">
                    <img src={img1} alt="User profile" className="w-[80px] h-[80px] rounded-full object-cover" />
                    <h3 className="font-bold text-lg truncate w-11/12">{sessionData.firstname} {sessionData.lastname}</h3>
                    <small className="truncate w-11/12 text-xs">{sessionData.email}</small>
                </div>

                <div className="space-y-4 overflow-y-auto h-3/4">
                    <ul className="pb-5 hover:shadow-accent-white">
                        {
                            filteredTasks.map(({ href, title, icon }, index) => (
                                <NavLink
                                    to={href}
                                    key={index}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'bg-pry text-pry'
                                            : 'text-neutral-500 hover:bg-pry hover:text-accent-white transition-all duration-300'
                                    }
                                >
                                    <div className="flex items-center gap-3 mb-3 font-medium text-base ms-2 rounded-md py-4 px-2 hover:opacity-100">
                                        {icon}
                                        <li>{title}</li>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
                <button
                    onClick={handleLogout}
                    className="absolute bg-accent-black border-t border-neutral-700 ps-2 w-full left-0 bottom-0 h-[40px] flex gap-2 items-center font-semibold text-neutral-500 hover:text-neutral-500/60"
                >
                    <span>Log Out</span>
                    <IoLogOut className="size-6" />
                </button>
            </div>
        ) : null
    );
};

export default LeftBar;
