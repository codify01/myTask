import React from 'react';
import TaskDetailsCard from './Cards/TaskDetailsCard';
import TaskCardOne from './Cards/TaskCardOne';
import CarouselOne from './Carousels/CarouselOne';

import Createtask from '../pages/dashboard/admin/create';
import Teamembers from '../pages/dashboard/user/Team';
import Headline from './Headline';

const TaskDetails = () => {
  const list = [
    1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1
  ]
	return (
		<div className="sContainer mt-3 space-y-4 h-[93vh] overflow-y-auto pb-24">
			{/* <Teamembers/> */}
			<Headline title={'Task Details'}/>
			<CarouselOne/>
			{
				list.map(()=>(
				<TaskDetailsCard />
				))
			}
			{/* <Createtask/> */}
		</div>
	);
};

export default TaskDetails;
