<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { MdSpaceDashboard, MdGroups2, MdCardMembership, MdAssignment, MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCreate, IoLogOut } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/images/img1.jpeg";


=======
import React from "react";
import { MdSpaceDashboard, MdGroups2, MdCardMembership, MdAssignment, MdPendingActions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoCreate, IoLogOut } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import img1 from "../assets/images/img1.jpeg";

>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
const eachTask = [
  {
    href: "/user/dashboard",
    title: "Dashboard",
<<<<<<< HEAD
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
  }, [])

  const ignoredPages = ['/', '/login', '/about', '*'];
  const location = useLocation();
  const isHere = ignoredPages.includes(location.pathname);
  const navigate = useNavigate()

  const filteredTasks = eachTask.filter(task => task.roles.includes(currentUserRole));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('tasklength')
    localStorage.removeItem('completedTask')
    localStorage.removeItem('token')
    localStorage.removeItem('pendingTask')
    navigate('/login')
};
=======
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
    href: "/admin/pending-task",
    title: "Pending task",
    icon: <MdPendingActions className="size-6" />
},
]

const MobileLeftBar = ({ isOpen, toggleSidebar }) => {
  const ignoredPages = ['/', '/login', '/about', '*'];
  const location = useLocation();
  const isHere = ignoredPages.includes(location.pathname);
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-accent-white dark:bg-accent-black shadow-xl z-40 overflow-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
<<<<<<< HEAD
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
=======
        {!isHere && (
          <div className="space-y-5 p-5">
            <div className="flex flex-col items-center w-full text-center">
              <img src={img1} alt="User profile" className="w-20 h-20 rounded-full object-cover" />
              <h3 className="font-bold text-lg truncate w-full">Adeleke Oluwamayokun</h3>
              <small className="truncate w-full text-xs">adelekeoluwamayokun27@gmail.com</small>
            </div>
            <ul className="space-y-4">
              {eachTask.map(({ href, title, icon }, index) => (
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
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
<<<<<<< HEAD
                    <li>{title}</li>
=======
                    <li className="">{title}</li>
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
                  </div>
                </NavLink>
              ))}
            </ul>
<<<<<<< HEAD
            <button
                    onClick={handleLogout}
                    className="absolute bg-accent-black border-t border-neutral-700 ps-2 w-full left-0 bottom-0 h-[40px] flex gap-2 items-center font-semibold text-neutral-500 hover:text-neutral-500/60"
                >
                    <span>Log Out</span>
                    <IoLogOut className="size-6" />
                </button>
=======
            <Link 
              to="/" 
              className="absolute bottom-0 left-0 w-full flex items-center justify-center text-neutral-500 font-medium p-2 border-t border-neutral-700"
              onClick={toggleSidebar} 
            >
              Log Out
              <IoLogOut className="ml-2" />
            </Link>
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
          </div>
        )}
      </div>
      {isOpen && (
        <div
<<<<<<< HEAD
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
=======
          className="fixed inset-0 bg-black bg-opacity-50"
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default MobileLeftBar;
