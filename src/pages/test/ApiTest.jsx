// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [user, setUser] = useState('');

//   useEffect(() => {
//     // Check if session exists
//     axios.get('https://apitask.sunmence.com.ng/session.php', { withCredentials: true })
//       .then(response => {
//         console.log(response);
        
//         if (response.data.status === 'authenticated') {
//           setAuthenticated(true);
//           setUser(response.data.user);
//         } else {
//           setAuthenticated(false);
//         }
//       })
//       .catch(() => setAuthenticated(false));
//   }, []);

//   if (!authenticated) {
//     return <p>You are not authenticated. Please log in.</p>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user}</h1>
//       {/* Render protected dashboard content */}
//     </div>
//   );
// }

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import { Scrollbar, Autoplay } from 'swiper/modules';
// import TaskCardOne from '../Cards/TaskCardOne';
// import axios from 'axios';

// const CarouselOne = ({ onItemClick }) => {
// 	const [task, setTasks] = useState([])
// 	const [user, setUser] = useState([{email:'latifah@gmail.com'}])
// 	useEffect(() => {
// 		const fetchModerators = async () => {
// 			try {
// 				const { data } = await axios.get('https://apitask.sunmence.com.ng/alltask.php');
// 				console.log(data.tasks.moderators)
// 				setTasks(data.tasks)
// 				const filteredTask = data.tasks.filter((each)=>each.moderators && each.moderators.includes(user.email))
// 				console.log(filteredTask)	
// 				setTasks(filteredTask)
// 			} catch (error) {
// 				console.error('Error fetching moderators:', error);
// 			}
// 		}
// 		fetchModerators();
// 	}, []);

// 	const tasks = [
// 		{
// 			id: 1,
// 			title: 'Design New Dashboard',
// 			description: 'Work on the UI/UX design for the new admin dashboard, ensuring it aligns with user feedback.',
// 			status: 'pending',
// 			teamMembers: [
// 				{ image: 'https://picsum.photos/200/300' },
// 				{ image: 'https://picsum.photos/200/301' },
// 				{ image: 'https://picsum.photos/200/302' },
// 				{ image: 'https://picsum.photos/200/303' },
// 			],
// 		},
// 		{
// 			id: 2,
// 			title: 'Revamp Landing Page',
// 			description: 'Redesign the landing page with updated branding and responsive layout.',
// 			status: 'in-progress',
// 			teamMembers: [
// 				{ image: 'https://picsum.photos/200/300' },
// 				{ image: 'https://picsum.photos/200/301' },
// 				{ image: 'https://picsum.photos/200/302' },
// 				{ image: 'https://picsum.photos/200/303' },
// 			],
// 		},
		
// 	];
	
// 	return (
// 		<Swiper
// 			autoplay={{
// 				delay: 2500,
// 				disableOnInteraction: false,
// 			}}
// 			scrollbar={{
// 				hide: false,
// 			}}
// 			modules={[Scrollbar, Autoplay]}
// 			className="mySwiper"
// 			breakpoints={{
// 				320: {
// 					slidesPerView: 1.2,
// 					spaceBetween: 10,
// 				},
// 				640: {
// 					slidesPerView: 1.7,
// 					spaceBetween: 10,
// 				},
// 				1024: {
// 					slidesPerView: 2.5,
// 					spaceBetween: 10,
// 				},
// 				1280: {
// 					slidesPerView: 3.2,
// 					spaceBetween: 10,
// 				},
// 			}}
// 		>
// 			{task.map((task) => (
// 				<SwiperSlide key={task.id} onClick={() => onItemClick(task)}>
// 					<TaskCardOne
// 						title={task.title}
// 						description={task.description}
// 						status={task.status}
// 						teamMembers={task.teamMembers}
// 					/>
// 				</SwiperSlide>
// 			))}
// 			<div className="h-4"></div>
// 		</Swiper>
// 	);
// };

// export default CarouselOne;
