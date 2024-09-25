import React, { useState, useEffect } from 'react';
import img2 from "../assets/images/img2.png";
import img1 from "../assets/images/img1.jpeg";
import { CiBellOn } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import MobileLeftBar from './MobileNavBar';

const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const isMobile = useMobileScreen();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/about';
  
  // Retrieve user data from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setSessionData(parsedUser);
      } catch (err) {
        setError("Error parsing user data from local storage");
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <>
      <header className='bg-accent-white dark:bg-neutral-950'>
        <nav className='h-[8vh] bg-accent-black dark:bg-neutral-900 fixed w-full z-20 flex items-center px-5 justify-between border-b border-neutral-400 dark:border-neutral-500'>
          <Link to={'/'}>
            <img src={img2} alt="Logo" className="w-32 mx-auto" />
          </Link>

          <div className="flex gap-3 items-center">
            {/* Mobile Menu Toggle */}
            {isMobile && !isHomePage && (
              <button onClick={toggleSidebar} className="text-2xl">
                <LuMenu />
              </button>
            )}

            {/* Conditional rendering based on session data */}
            {sessionData ? (
              // Logged-in state
              <>
                <CiBellOn className='text-2xl' />
                <button className="btn bg-pry font-semibold rounded-md flex items-center justify-between border-2 border-accent-white gap-2 px-2 py-1 w-[150px]">
                  <span className='truncate w-10/12 text-sm capitalize'>
                    {sessionData.firstname + ' ' + sessionData.lastname}
                  </span>
                  <img src={img1} alt="User" className="w-5 h-5 rounded-full object-cover" />
                </button>
              </>
            ) : (
              // Not logged-in state
              <>
                <Link to="/login" className="bg-pry py-1.5 px-4 rounded font-medium">Get started</Link>
              </>
            )}
          </div>
        </nav>

        {/* This spacer maintains the height of the navbar */}
        <div className='h-[8vh]' />
      </header>

      {/* Mobile Sidebar */}
      {isMobile && sidebarOpen && (
        <MobileLeftBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
    </>
  );
};

export default NavBar;
