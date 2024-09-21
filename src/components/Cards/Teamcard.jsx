import React from "react";
import Teamtasklist from "../Teamtasklist";

const Teamcard = ({image, name}) => {

    const MemberOneTask = [
        {
            id: 1,
            title: "Task 1",
            status: "pending",
        },
        {
            id: 1,
            title: "Task 2",
            status: "pending",
        },
        {
            id: 1,
            title: "Task 3",
            status: "pending",
        },
        {
            id: 1,
            title: "Task 4",
            status: "pending",
        },
        {
            id: 1,
            title: "Task 5",
            status: "pending",
        },
    ]

    return (

        <div className="border dark:border-neutral-500 border-neutral-400 p-3 rounded-md dark:bg-neutral-800 bg-neutral-200 flex gap-5 relative">
            <div className="border-4 border-pry bg-accent-white rounded-lg overflow-hidden">
                <img src={image} alt="" />
            </div>
            <div className="bb-box w-3/4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-3xl">Tasks</h3>
                    <h3 className="text-5xl absolute right-3 font-bold text-neutral-700 opacity-60 capitalize">{name}</h3>
                </div>
                <ul className="ps-1 space-y-1 mt-2 text-neutral-400">
                    {
                        MemberOneTask.map(task => <Teamtasklist key={task.id} task={task.title} status={task.status} />)
                    }
                </ul>
            </div>
        </div>

    )

}


export default Teamcard;