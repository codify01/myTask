import React, { useEffect, useState } from "react";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";
import { GiCheckMark, GiTrashCan } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import axios from "axios";

const Listoftasks = () => {
    const status = 'pending'
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentTask, setCurrentTask] = useState({ id: "", title: "", description: "", dueDate: "" });
    const [task, setTasks] = useState([])
    useEffect(()=>{
        const url = 'https://apitask.sunmence.com.ng/alltask.php'
        axios.get(url).then(({data})=>{
            setTasks(data.tasks)
        }).catch((err)=>{
            console.log('Error fetching data', err)
        })
    },[])
    
    const filteredTasks = task.filter(task => task.status === status)

    const handleEditClick = (task) => {
        setCurrentTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateTask = ()=>{
        console.log(currentTask);
    }

    return (
        <div className="sContainer w-[100%] overflow-y-auto pt-3">
            <Headline title={'Pending Tasks'} />
            <div className="w-full border border-neutral-700 rounded-lg overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="flex justify-between mb-3">
                            <th scope="col">Task ID</th>
                            <th scope="col">Task Title</th>
                            <th scope="col">Assigned to:</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        {filteredTasks.map(({id, task_name, moderators,date}) => (
                            <tr key={task.id} className="flex justify-between items-center">
                                <td>{id}</td>
                                <td>{task_name}</td>
                                <td>{moderators}</td>
                                <td>{date}</td>
                                <td className="flex justify-center gap-2">
                                    <BtnOne icons={<GiCheckMark className="text-green-700 size-4" />} style="border-green-800 bg-green-900/20 ps-0 pe-2 hover:bg-green-900" />
                                    <button onClick={() => handleEditClick(task)}>
                                        <BtnOne
                                            icons={<CiEdit className="text-yellow-700 size-4" />}
                                            style="border-yellow-800 bg-yellow-900/20 ps-0 pe-2 hover:bg-yellow-900"
                                        />
                                    </button>
                                    <BtnOne icons={<GiTrashCan className="text-red-600 size-4" />} style="border-red-800 bg-red-900/60 ps-0 pe-2 hover:bg-red-900" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                                            value={currentTask.title}
                                            onChange={(e) => setCurrentTask({ ...currentTask, title: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="taskDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                        <textarea
                                            name="taskDescription"
                                            id="taskDescription"
                                            rows="6"
                                            className="bg-gray-50 border border-neutral-500 text-gray-900 text-sm rounded resize-none block w-full p-3 dark:bg-accent-black dark:border-gray-500 dark:text-white"
                                            value={currentTask.description}
                                            onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                                        />
                                    </div>
                                    <BtnOne name={"Update"} style="border-green-800 bg-green-900/20 px-5 mx-auto hover:bg-pry" />
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
