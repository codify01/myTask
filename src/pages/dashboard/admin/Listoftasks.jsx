import React, { useEffect, useState } from "react";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";
import axios from "axios";
import TaskListCard from "../../../components/Cards/TaskListCard";

const Listoftasks = ({ status, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState({ id: "", task_name: "", task_description: "", date: "" });
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const url = 'https://apitask.sunmence.com.ng/alltask.php';
        axios.get(url).then(({ data }) => {
            setTaskList(data?.tasks || [])
        }).catch((err) => {
            console.log('Error fetching data', err);
        });
    }, []);

    const filteredTasks = taskList?.filter(task => task.status === status) || [];
    
    const handleTaskCompletion = async (task) => {
        try {
            const response = await axios.post('https://apitask.sunmence.com.ng/alltask.php', {
                id: task.id,
                status: 'completed',
            });
            
            if (response.data.status === 'success') {
                const updatedTasks = taskList.map(t => t.id === task.id ? { ...t, status: 'completed' } : t);
                setTaskList(updatedTasks);
                console.log(`Task ${task.id} marked as completed.`);
            } else {
                console.log('Failed to update task status');
            }
        } catch (error) {
            console.error('Error updating task status', error);
        }
    };

    const handleEditClick = (task) => {
        setCurrentTask(task);
        setIsModalOpen(true);
    };

    const handleUpdateTask = async () => {
        try {
            const response = await axios.post('https://apitask.sunmence.com.ng/editTask.php', {
                id: currentTask.id,
                task_name: currentTask.task_name,
                task_description: currentTask.task_description,
                date: currentTask.date,
            });
            
            if (response.data.status === 'success') {
                const updatedTasks = taskList.map(t => t.id === currentTask.id ? currentTask : t);
                setTaskList(updatedTasks);
                setIsModalOpen(false);
                console.log('Task updated successfully');
            } else {
                console.log('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="sContainer w-[100%] overflow-y-auto pt-3">
            <Headline title={title} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <TaskListCard key={task.id} task={task} onComplete={handleTaskCompletion} onEdit={handleEditClick}/>
                    ))
                ) : (
                    <div className="col-span-3 text-center text-gray-500">
                        No tasks available for the current status.
                    </div>
                )}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-500 ease-in-out animate-fadeIn">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-neutral-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit Task
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={handleCloseModal}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7L1 1m6 6l6-6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4 w-full">
                                    <div>
                                        <label htmlFor="taskTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                                        <input
                                            type="text"
                                            name="taskTitle"
                                            id="taskTitle"
                                            className="border border-neutral-500 text-sm rounded block w-full p-3 dark:bg-accent-black dark:border-gray-500 dark:text-white"
                                            value={currentTask.task_name}
                                            onChange={(e) => setCurrentTask({ ...currentTask, task_name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="taskDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                        <textarea
                                            name="taskDescription"
                                            id="taskDescription"
                                            rows="6"
                                            className="bg-gray-50 border border-neutral-500 text-gray-900 text-sm rounded resize-none block w-full p-3 dark:bg-accent-black dark:border-gray-500 dark:text-white"
                                            value={currentTask.task_description}
                                            onChange={(e) => setCurrentTask({ ...currentTask, task_description: e.target.value })}
                                        />
                                    </div>
                                    <button onClick={handleUpdateTask} >
                                    <BtnOne 
                                        name={"Update"} 
                                        style="border-green-800 bg-green-900/20 px-5 mx-auto hover:bg-pry" 
                                    />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Listoftasks;
