import React, { useEffect, useState } from "react";
import { MdSpaceDashboard, MdGroups2, MdCardMembership, MdAssignment, MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCreate, IoLogOut } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import img1 from "../assets/images/img1.jpeg";


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
  }
];

const MobileLeftBar = ({ isOpen, toggleSidebar }) => {
  const [sessionData, setSessionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUserRole, setCurrentUserRole] = useState()



  // Retrieve user data from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setSessionData(parsedUser);
        setCurrentUserRole(parsedUser.type)
        setLoading(false);
      } catch (err) {
        setError("Error parsing user data from local storage");
        setLoading(false);
      }
    } else {
      setError("No user data found in local storage");
      setLoading(false);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const ignoredPages = ['/', '/login', '/about', '*'];
  const location = useLocation();
  const isHere = ignoredPages.includes(location.pathname);

  // Filter tasks based on the current user's role
  const filteredTasks = eachTask.filter(task => task.roles.includes(currentUserRole));

  // If still loading or error occurred, display a message
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-accent-white dark:bg-accent-black shadow-xl z-40 overflow-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {!isHere && sessionData && (
          <div className="space-y-5 p-5">
            <div className="flex flex-col items-center w-full text-center">
              <img src={img1} alt="User profile" className="w-20 h-20 rounded-full object-cover" />
              <h3 className="font-bold text-lg truncate w-full capitalize">
                {sessionData.firstname} {sessionData.lastname}
              </h3>
              <small className="truncate w-full text-xs">{sessionData.email}</small>
            </div>

            <ul className="space-y-4">
              {filteredTasks.map(({ href, title, icon }, index) => (
                <NavLink 
                  to={href} 
                  key={index} 
                  className={({ isActive }) =>
                      isActive
                          ? 'bg-pry text-pry'
                          : 'text-neutral-500 hover:bg-pry hover:text-accent-white transition-all duration-300'
                  }
                >
                  <div onClick={toggleSidebar} className="flex items-center gap-3 mb-3 font-medium text-base ms-2 rounded-md py-4 px-2 hover:opacity-100">
                    {icon}
                    <li>{title}</li>
                  </div>
                </NavLink>
              ))}
            </ul>
            <Link 
              to="/" 
              className="absolute bottom-0 left-0 w-full flex items-center justify-center text-neutral-500 font-medium p-2 border-t border-neutral-700"
              onClick={toggleSidebar} 
            >
              Log Out
              <IoLogOut className="ml-2" />
            </Link>
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default MobileLeftBar;
