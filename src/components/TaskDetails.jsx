import React from 'react';
import TaskDetailsCard from './Cards/TaskDetailsCard';
import TaskCardOne from './Cards/TaskCardOne';
import CarouselOne from './Carousels/CarouselOne';

const TaskDetails = () => {
	return (
		<div className="sContainer space-y-4">
			<div className="flex items-center justify-center sContainer">
				<h1 className="basis-1/3 text-4xl font-bold">Task Details</h1>
				<hr className="border border-accent-black dark:border-accent-white rounded-full basis-2/3" />
			</div>
			<CarouselOne/>
			<TaskDetailsCard />
		</div>
	);
};

export default TaskDetails;
