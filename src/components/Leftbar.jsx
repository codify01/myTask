import React from "react";
import img1 from "../assets/images/img1.jpeg"
import Onetasklist from "./Tasklist";

const LeftBar = () => {

    const eachTask = [
        {
            href: "#task1",
            title: "Task 1"
        },
        {
            href: "task2",
            title: "Task 2"
        },
        {
            href: "task3",
            title: "Task 3"
        },
        {
            href: "task4",
            title: "Task 4"
        },
        {
            href: "task5",
            title: "Task 5"
        },
        {
            href: "task6",
            title: "Task 6"
        },
        {
            href: "task7",
            title: "Task 7"
        },
        {
            href: "task8",
            title: "Task 8"
        },
        {
            href: "task9",
            title: "Task 9"
        },
        {
            href: "task10",
            title: "Task 10"
        }
    ]

    return (

        <div className="flex flex-col justify-between bg-black text-accent-white w-1/5 h-[90vh] border-r border-neutral-600 p-4 ps-5 pb-5">
            <div className="flex flex-col leading-tight items-center w-full">
                <img src={img1} alt="..." className="w-[80px] h-[80px] rounded-full object-cover" />
                <h3 className="font-bold text-lg truncate w-11/12">Adeleke Oluwamayokun</h3>
                <small className="truncate w-11/12 text-xs">adelekeoluwamayokun27@gmail.com</small>
            </div>
            <div className="space-y-4 h-3/5">
                <h3 className="font-bold text-neutral-300 text-xl">Tasks</h3>
                <ul className="text-lg overflow-y-scroll h-[85%] shadow-accent-white">
                    {
                        eachTask.map(({href, title}, index) => (
                            <Onetasklist href={href} title={title} />
                        ))
                    }
                </ul>
            </div>
            <a href="" className="text-neutral-600 text-sm">Logout</a>
        </div>

    )

}

export default LeftBar