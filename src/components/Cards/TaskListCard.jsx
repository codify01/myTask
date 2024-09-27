import React from "react";
import { GiCheckMark, GiTrashCan } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import BtnOne from "../Buttons/BtnOne";

const TaskListCard = ({ task, onComplete, onEdit, }) => {
    return (
        <div key={task.id} className="border dark:border-neutral-600 rounded-lg p-4 shadow dark:bg-neutral-800 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold dark:text-white">{task.task_name}</h2>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{task.date}</span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
                {task.task_description}
            </p>

            <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Assigned to:</strong> {task.moderators?.join(", ") || "No moderators"}
            </div>

            <div className="flex justify-end space-x-3">
                <button onClick={onComplete}>
                    <BtnOne icons={<GiCheckMark className="text-green-700 size-4" />} style="border-green-800 bg-green-900/20 ps-0 pe-2 hover:bg-green-900" />
                </button>
                <button onClick={onEdit}>
                    <BtnOne icons={<CiEdit className="text-yellow-700 size-4" />} style="border-yellow-800 bg-yellow-900/20 ps-0 pe-2 hover:bg-yellow-900" />
                </button>
                {/* <button>
                <BtnOne icons={<GiTrashCan className="text-red-600 size-4" />} style="border-red-800 bg-red-900/60 ps-0 pe-2 hover:bg-red-900" />
                </button> */}
            </div>
        </div>
    );
};

export default TaskListCard;
