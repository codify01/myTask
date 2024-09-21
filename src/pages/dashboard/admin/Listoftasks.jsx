import React from "react";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";
import { GiCheckMark, GiTrashCan } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";

const Listoftasks = () => {
    
    return (

        <div className="sContainer w-[100%] overflow-y-auto pt-3">
            <Headline title={'Pending Tasks'}/>
            <div className="table-responsive w-full border border-neutral-700 rounded-lg overflow-x-auto">
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
                        <tr className="flex justify-between items-center">
                            <td>1</td>
                            <td>Create a React App</td>
                            <td>Oluwamayokun</td>
                            <td>2022-01-31</td>
                            <td className="flex justify-center gap-2">
                                <BtnOne icons={<GiCheckMark className='text-green-700 size-4'/>} style={'border-green-800 bg-green-900/20 ps-0 pe-2 hover:bg-green-900'}/>
                                <BtnOne icons={<CiEdit className='text-yellow-700 size-4'/>} style={'border-yellow-800 bg-yellow-900/20 ps-0 pe-2 hover:bg-yellow-900'}/>
                                <BtnOne icons={<GiTrashCan className='text-red-600 size-4'/>} style={'border-red-800 bg-red-900/60 ps-0 pe-2 hover:bg-red-900'}/>
                            </td>
                        </tr>
                        <tr className="flex justify-around items-center">
                            <td>2</td>
                            <td>Create a React App</td>
                            <td>Oluwamayokun</td>
                            <td>2022-01-31</td>
                            <td className="flex justify-center gap-2">
                                <BtnOne icons={<GiCheckMark className='text-green-700 size-4'/>} style={'border-green-800 bg-green-900/20 ps-0 pe-2 hover:bg-green-900'}/>
                                <BtnOne icons={<CiEdit className='text-yellow-700 size-4'/>} style={'border-yellow-800 bg-yellow-900/20 ps-0 pe-2 hover:bg-yellow-900'}/>
                                <BtnOne icons={<GiTrashCan className='text-red-600 size-4'/>} style={'border-red-800 bg-red-900/60 ps-0 pe-2 hover:bg-red-900'}/>
                            </td>
                        </tr>
                        <tr className="flex justify-around items-center">
                            <td>3</td>
                            <td>Create a React App</td>
                            <td>Oluwamayokun</td>
                            <td>2022-01-31</td>
                            <td className="flex justify-center gap-2">
                                <BtnOne icons={<GiCheckMark className='text-green-700 size-4'/>} style={'border-green-800 bg-green-900/20 ps-0 pe-2 hover:bg-green-900'}/>
                                <BtnOne icons={<CiEdit className='text-yellow-700 size-4'/>} style={'border-yellow-800 bg-yellow-900/20 ps-0 pe-2 hover:bg-yellow-900'}/>
                                <BtnOne icons={<GiTrashCan className='text-red-600 size-4'/>} style={'border-red-800 bg-red-900/60 ps-0 pe-2 hover:bg-red-900'}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button data-modal-target="edit-modal" data-modal-toggle="edit-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Toggle modal
            </button>

            <div id="edit-modal" tabindex="-1" aria-hidden="true" class="hidde overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full top-[15%] md:left-[30%] h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-neutral-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit
                            </h3>
                            <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5">
                            <form class="space-y-4 w-full" action="#">
                                <div>
                                    <label for="taskName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                    <input type="text" name="taskName" id="taskName" class="bg-neutral-700 border border-neutral-500 text-gray-900 text-sm rounded outline-none block w-full p-3 dark:bg-accent-black dark:border-gray-500 dark:text-white" />
                                </div>
                                <div>
                                    <label for="taskDescription" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                    <textarea name="taskDescription" id="taskDescription" rows="6" class="bg-gray-50 border border-neutral-500 text-gray-900 text-sm rounded outline-none resize-none block w-full p-3 dark:bg-accent-black dark:border-gray-500 dark:text-white"></textarea>
                                </div>
                                <BtnOne name={"Update"} style={'border-green-800 bg-green-900/20 px-5 mx-auto hover:bg-pry'}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

    )

}

export default Listoftasks;