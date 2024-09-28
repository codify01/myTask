import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayOut';
import ProtectedRoute from '../components/ProtectedRoute';

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
        
        {/* Protect User Dashboard Routes */}
        <Route 
          path="/user/dashboard" 
          element={<ProtectedRoute element={() => <MainLayout><UserDashboard /></MainLayout>} />} 
        />
        <Route 
          path="/profile" 
          element={<ProtectedRoute element={() => <MainLayout><Profile /></MainLayout>} />} 
        />
        <Route 
          path="/task" 
          element={<ProtectedRoute element={() => <MainLayout><TaskPage /></MainLayout>} />} 
        />
        <Route 
          path="/team" 
          element={<ProtectedRoute element={() => <MainLayout><Teamembers /></MainLayout>} />} 
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/groups" element={<MainLayout><GroupList /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        
        {/* Protect Admin Routes */}
        <Route 
          path="/admin/tasks" 
          element={<ProtectedRoute element={() => <MainLayout><TaskPage /></MainLayout>} />} 
        />
        <Route 
          path="/admin/add-user" 
          element={<ProtectedRoute element={() => <MainLayout><AddUser /></MainLayout>} />} 
        />
        <Route 
          path="/admin/assign-task" 
          element={<ProtectedRoute element={() => <MainLayout><CreateTask /></MainLayout>} />} 
        />
        <Route 
          path="/admin/all-users" 
          element={<ProtectedRoute element={() => <MainLayout><AllUsers /></MainLayout>} />} 
        />
        <Route 
          path="/admin/pending-task" 
          element={<ProtectedRoute element={() => <MainLayout><ListOfTasks title={'Pending Tasks'} status={'pending'} /></MainLayout>} />} 
        />
        <Route 
          path="/admin/progressing-task" 
          element={<ProtectedRoute element={() => <MainLayout><ListOfTasks title={'Tasks in progress'} status={'in-progress'} /></MainLayout>} />} 
        />
        <Route 
          path="/admin/completed-task" 
          element={<ProtectedRoute element={() => <MainLayout><ListOfTasks title={'Completed tasks'} status={'completed'} /></MainLayout>} />} 
        />
        
        <Route path="/test" element={<Taskstatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
