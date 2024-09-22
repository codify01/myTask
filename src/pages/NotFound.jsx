import React, { useEffect } from "react";
import { VscServerProcess } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import PageTitle from "../utilities/PageTitle";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000)

    return () => clearTimeout(timer)
  }, [navigate]);

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-center items-center h-screen bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white">
        <PageTitle title={'Page not found'}/>
     <div className="flex items-center justify-center text-center px-4">
    <div className=" p-8 rounded-lg shadow-lg max-w-lg">
      <VscServerProcess className="text-6xl mb-4 mx-auto" />
      <h1 className="text-2xl font-bold mb-4">Page not found or link broken</h1>
      <p className="text- mb-6">You will be redirected to home page in 5 seconds...</p>
      <button
        onClick={() => navigate('/')}
        className="px-5 py-3 bg-pry hover:bg-pry/80 text-white rounded-lg"
      >
        Go Back Now
      </button>
    </div>
  </div>
    </div>
  );
};

export default NotFound;
