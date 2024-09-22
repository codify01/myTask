import React from 'react';
import CardTwo from './Cards/CardTwo';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaClipboardList, FaClock } from 'react-icons/fa';

const RightBar = () => {
	const CardTwoArray = [
		{
			title: 'Pending Tasks',
			count: '5',
			icon: <FaClock className="text-yellow-500" size={20} />,
			color: 'bg-yellow-300',
			bgColor: 'bg-yellow-700',
			font: 'text-2xl',
			headingsize: 'text-sm',
		},
		{
			title: 'Total Tasks',
			count: '12',
			icon: <FaClipboardList className="text-blue-500" size={20} />,
			color: 'bg-blue-300',
			bgColor: 'bg-blue-700 scale-105 hover:scale-110',
			font: 'text-3xl',
			headingsize: 'text-lg',
		},
		{
			title: 'Completed Tasks',
			count: '7',
			icon: <FaCheckCircle className="text-green-500" size={20} />,
			color: 'bg-green-300',
			bgColor: 'bg-green-700',
			font: 'text-2xl',
			headingsize: 'text-sm',
		},
	];

	const eachTask = [
		{ href: 'task1', title: 'Task 1' },
		{ href: 'task2', title: 'Task 2' },
		{ href: 'task3', title: 'Task 3' },
		{ href: 'task4', title: 'Task 4' },
		{ href: 'task5', title: 'Task 5' },
		{ href: 'task6', title: 'Task 6' },
		{ href: 'task7', title: 'Task 7' },
		{ href: 'task8', title: 'Task 8' },
		{ href: 'task9', title: 'Task 9' },
		{ href: 'task10', title: 'Task 10' },
	];
  
    const ignoredPages = ['/', '/login', '/about', '*']
    const location = useLocation()
	const isHere = ignoredPages.includes(location.pathname)
	return (
        !isHere?
		<div className="hidden md:block w-1/5 h-[92vh] border-l border-neutral-400 dark:border-neutral-500 p-5 space-y-10">
			<div className="flex  justify-around items-center -space-x-2">
				{CardTwoArray.map(
					(
						{ title, count, icon, color, bgColor, font, headingsize },
						index
					) => (
						<CardTwo
							key={index}
							category={title}
							count={count}
							icon={icon}
							color={color}
							bgColor={bgColor}
							font={font}
							headfont={headingsize}
						/>
					)
				)}
			</div>

			<div className="flex flex-col gap-5">
				<div className="flex gap-3 items-center">
					<h3 className="font-bold text-xl">History</h3>
					<hr className="w-full border border-neutral-500" />
				</div>
				<ul className="text-lg grid space-y-3 overflow-y-scroll shadow-accent-white">
					{eachTask.map(({ href, title }, index) => (
						<li
							key={index}
							to={href}
							className="text-base font-medium dark:bg-neutral-700 hover:bg-neutral-500/80 px-2 py-2 text-neutral-400 rounded hover:text-pry transition-all duration-300"
						>
							{title}
						</li>
					))}
				</ul>
			</div>
		</div>
        : null
	);
};

export default RightBar;
