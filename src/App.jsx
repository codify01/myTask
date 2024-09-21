import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserDashboard from './pages/dashboard/user/UserDashboard';
import TaskPage from './pages/dashboard/user/Taskpage';
import LeftBar from './components/Leftbar';
import RightBar from './components/Rightbar';

const App = () => {
	return (
		<>
			<Router>
				<NavBar />
				<div className="flex justify-between md:h-[92vh] overflow-y-hidden">
					<LeftBar />
					<div className="overflow-y-scroll md:max-w-[60%]">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/user" element={<UserDashboard />} />
							<Route path="/task" element={<TaskPage />} />
						</Routes>
					</div>
					<RightBar />
				</div>
				{/* <Footer/> */}
			</Router>
		</>
	);
};

export default App;
