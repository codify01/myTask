import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayOut';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const UserDashboard = lazy(() => import('../pages/dashboard/user/UserDashboard'));
const Profile = lazy(() => import('../pages/dashboard/user/Profile'));
const TaskPage = lazy(() => import('../pages/dashboard/user/TeamPage'));
const Teamembers = lazy(() => import('../pages/dashboard/user/Team'));
const SuperAdmin = lazy(() => import('../pages/dashboard/SuperAdmin'));
const AddUser = lazy(() => import('../pages/dashboard/admin/Adduser'));
const CreateTask = lazy(() => import('../pages/dashboard/admin/create'));
const AllUsers = lazy(() => import('../pages/dashboard/admin/Alluser'));
const ListOfTasks = lazy(() => import('../pages/dashboard/admin/Listoftasks'));
const GroupList = lazy(() => import('../pages/group chat/GroupList'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const Login = lazy(() => import('../pages/dashboard/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));

import Taskstatus from '../components/Taskstatus';

const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative flex space-x-2">
          {/* Background rotating ring */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-t-pry border-neutral-200 rounded-full animate-spin"></div>
  
          {/* First dot */}
          <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade"></div>
  
          {/* Second dot with delay */}
          <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade animation-delay-200"></div>
  
          {/* Third dot with longer delay */}
          <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade animation-delay-400"></div>
        </div>
      </div>
    );
  };
const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/user/dashboard" element={<MainLayout><UserDashboard /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/task" element={<MainLayout><TaskPage /></MainLayout>} />
        <Route path="/team" element={<MainLayout><Teamembers /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/groups" element={<MainLayout><GroupList /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        {/* <Route path="/admin" element={<MainLayout><SuperAdmin /></MainLayout>}> */}
          <Route path="/admin/tasks" element={<MainLayout><TaskPage /></MainLayout>} />
          <Route path="/admin/add-user" element={<MainLayout><AddUser /></MainLayout>} />
          <Route path="/admin/assign-task" element={<MainLayout><CreateTask /></MainLayout>} />
          <Route path="/admin/all-users" element={<MainLayout><AllUsers /></MainLayout>} />
          <Route path="/admin/pending-task" element={<MainLayout><ListOfTasks /></MainLayout>} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Taskstatus />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
