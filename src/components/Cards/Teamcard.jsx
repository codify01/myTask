import React from "react";
import Teamtasklist from "../Teamtasklist";

const Teamcard = ({ image, name }) => {
    const MemberOneTask = [
        { id: 1, title: "Task 1", status: "pending" },
        { id: 2, title: "Task 2", status: "completed" },
        { id: 3, title: "Task 3", status: "in-progress" },
        { id: 4, title: "Task 4", status: "pending" },
        { id: 5, title: "Task 5", status: "pending" },
    ];

    // Function to map task status to corresponding styles
    const getStatusBadge = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500"
            case "in-progress":
                return "bg-blue-500"
            case "completed":
                return "bg-green-500"
            default:
                return "bg-gray-400"
        }
    };
    return (
        <div className="border dark:border-neutral-500 border-neutral-400 p-4 rounded-lg dark:bg-neutral-800 bg-neutral-100 flex gap-5 relative">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-4 border-pry flex-shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-xl capitalize">{name}</h3>
                </div>
                <ul className="space-y-2">
                    {MemberOneTask.map((task) => (
                        <li key={task.id} className="flex justify-between items-center p-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg">
                            <span className="font-medium text-base">{task.title}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(task.status)} text-white`}>
                                {task.status}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Teamcard;
