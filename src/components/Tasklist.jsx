import React from "react";

const Onetasklist = ({ href, title }) => {

    return(

        <>
            <li className="font-light text-base ms-2 opacity-50 rounded-md shadow-lg hover:shadow-accent-black p-2 hover:opacity-100 hover:bg-pry">
                <a className="" href={href}>{title}</a>
            </li>
        </>

    )

}

export default Onetasklist