import React from 'react';
import TaskDetailsCard from './Cards/TaskDetailsCard';
import TaskCardOne from './Cards/TaskCardOne';
import CarouselOne from './Carousels/CarouselOne';

const TaskDetails = () => {
  const list = [
    1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1
  ]
	return (
		<div className="sContainer mt-3 space-y-4 h-[93vh] overflow-y-auto">
			<div className="flex items-center justify-center">
				<h1 className="md:basis-1/3 text-4xl font-bold">Task Details</h1>
				<hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3" />
			</div>
			<CarouselOne/>
      {
        list.map(()=>(
          <TaskDetailsCard />
        ))
      }
		</div>
	);
};

export default TaskDetails;
