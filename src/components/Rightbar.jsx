import React from "react";
import CardTwo from "./Cards/CardTwo";
import { Link } from "react-router-dom";

const RightBar = () => {

    const CardTwoArray = [
        {
            title: "Total tasks",
            widthTaken: "w-full",
            count: "12",
            addsstyles: "number text-3xl",
            headingsize: "text-xl"
        },
        {
            title: "Pending tasks",
            widthTaken: "basis-1/2",
            count: "5",
            addsstyles: "number-2 text-2xl",
            headingsize: "text-xs"
        },
        {
            title: "Completed tasks",
            widthTaken: "basis-1/2",
            count: "7",
            addsstyles: "number-2 text-2xl",
            headingsize: "text-xs"
        },
    ]

    const eachTask = [
        {
            href: "task1",
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

        <div className="hidden md:flex flex-col justify-between w-1/5 h-[93vh] border-l border-neutral-400 dark:border-neutral-500 p-3 ps-5 pb-5">
            <div className="flex flex-wrap">
                {
                    CardTwoArray.map(({title, widthTaken, count, addsstyles, headingsize}, index) => (
                        <CardTwo key={index} category={title} space={widthTaken} count={count} font={addsstyles} headfont={headingsize} />
                    ))
                }
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-end">
                    <h3 className="font-bold text-xl">History</h3>
                    <hr className="w-full border border-neutral-500" />
                </div>
                <ul className="text-lg grid space-y-3 overflow-y-scroll h-[60%] shadow-accent-white">
                    {
                        eachTask.map(({href, title}, index) => (
                            <Link key={index} to={href} className="text-base font-medium text-neutral-600" >{title}</Link>
                        ))
                    }
                </ul>
            </div>
        </div>

    )

}

export default RightBar