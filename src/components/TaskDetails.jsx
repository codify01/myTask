import React, { useState } from 'react';
import TaskDetailsCard from './Cards/TaskDetailsCard';
import CarouselOne from './Carousels/CarouselOne';
import Headline from './Headline';

const TaskDetails = () => {
	
	const [selectedTask, setSelectedTask] = useState(null);
	const handleCarouselItemClick = (task) => {
		setSelectedTask(task);
	};

	return (
		<div className="sContainer mt-3 space-y-4 h-[93vh] overflow-y-auto pb-24">
			<Headline title={'Task Details'} />
			<CarouselOne onItemClick={handleCarouselItemClick} />
			{selectedTask && <TaskDetailsCard task={selectedTask} />}
		</div>
	);
};

export default TaskDetails;
