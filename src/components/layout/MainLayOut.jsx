import React from 'react';
import NavBar from '../NavBar';
import LeftBar from '../Leftbar';
import RightBar from '../Rightbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex justify-between md:h-[92vh] overflow-y-hidden">
        <LeftBar />
        {children}
        <RightBar />
      </div>
    </>
  );
};

export default MainLayout;
