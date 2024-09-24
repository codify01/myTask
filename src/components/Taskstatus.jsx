import React, { useState } from "react";

const tasks = [
    {
        name: "Create App",
        status: "pending"
    },
    {
        name: "Create App",
        status: "in-progress"
    },
    {
        name: "Create App",
        status: "completed"
    },
    {
        name: "Create App",
        status: "completed"
    },
]

const Taskstatus = () => {

    return (

        <>
            <div>
                <h2>Pending Tasks</h2>
                <p>{
                    tasks.map(({name, status}) => (
                        status == "pending" ? `name = ${name} and status = ${status}` : null 
                    ))
                }</p>
            </div>
            <div>
                <h2>In-progress Tasks</h2>
                <p>{
                    tasks.map(({name, status}) => (
                        status == "in-progress" ? `name = ${name} and status = ${status}` : null 
                    ))
                }</p>
            </div>
            <div>
                <h2>Completed Tasks</h2>
                <p>{
                    tasks.map(({name, status}) => (
                        status == "completed" ? `name = ${name} and status = ${status}` : null 
                    ))
                }</p>
            </div>
        </>

    )

}

export default Taskstatus


