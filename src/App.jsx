import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserDashboard from './pages/dashboard/user/UserDashboard';
import TaskPage from './pages/dashboard/user/Taskpage';
import LeftBar from './components/Leftbar';
import RightBar from './components/Rightbar';
import SuperAdmin from './pages/dashboard/SuperAdmin';
import Teamembers from './pages/dashboard/user/Team';
import Createtask from './pages/dashboard/admin/create';
import Adduser from './pages/dashboard/admin/Adduser';
import Profile from './pages/dashboard/user/Profile';
import GroupList from './pages/group chat/GroupList';
import Listoftasks from './pages/dashboard/admin/Listoftasks';
import Login from './pages/dashboard/Login';
import Allusers from './pages/dashboard/admin/Alluser';
import AboutPage from './pages/about/AboutPage';
import NotFound from './pages/NotFound';

const App = () => {
	
	return (
		<>
			<Router>
				<NavBar />
				<div className="flex justify-between md:h-[92vh] overflow-y-hidden">
					<LeftBar />
					{/* <div className="overflow-y-scroll md:max-w-[60%]"> */}
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/user/dashboard" element={<UserDashboard />} />
							<Route path='/team' element={<Teamembers/>}/>
							<Route path='/profile' element={<Profile/>}/>
							<Route path="/task" element={<TaskPage />} />
							<Route path="/login" element={<Login />} />
							<Route path='/about' element={<AboutPage/>}/>
							<Route path='/admin' element={<SuperAdmin/>}/>
							<Route path="/admin/tasks" element={<TaskPage />} />
							<Route path="/admin/add-user" element={<Adduser />} />
							<Route path='/admin/assign-task' element={<Createtask/>}/>
							<Route path='/admin/all-users' element={<Allusers/>}/>
							<Route path="/task" element={<TaskPage />} />
							<Route path='/groups' element={<GroupList/>}/>
							<Route path='/admin/pending-task' element={<Listoftasks/>}/>
							<Route path='*' element={<NotFound/>}/>
						</Routes>
					{/* </div> */}
					<RightBar />
				</div>
				{/* <Footer/> */}
			</Router>
		</>
	);
};

export default App;
