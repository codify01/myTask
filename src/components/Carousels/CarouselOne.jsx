import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';
import TaskCardOne from '../Cards/TaskCardOne';
import axios from 'axios';

const CarouselOne = ({ onItemClick }) => {
  const [tasks, setTasks] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get('https://apitask.sunmence.com.ng/alltask.php');
        if (data && data.tasks) {
          localStorage.setItem('tasks', JSON.stringify(data.tasks))
          const filteredTasks = data.tasks.filter(
            (task) => task.moderators && task.moderators.includes(user.email)
          )
          const pendingTask = filteredTasks.filter((pending)=> pending.status && pending.status === 'pending')
          const completedTask = filteredTasks.filter((completed)=> completed.status && completed.status === 'completed')
          localStorage.setItem('pendingTask', pendingTask.length)
		      localStorage.setItem('tasklength', filteredTasks.length)
          localStorage.setItem('completedTask', completedTask.length)
          setTasks(filteredTasks);
        } else {
          console.error('No tasks found in API response');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user.email])

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar, Autoplay]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1.7,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
      }}
    >
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <SwiperSlide key={task.id} onClick={() => onItemClick(task)}>
            <TaskCardOne
              title={task.task_name}
              description={task.task_description} 
              status={task.status}
              teamMembers={task.moderators}
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No tasks available</p>
      )}
      <div className="h-4"></div>
    </Swiper>
  );
};

export default CarouselOne;
