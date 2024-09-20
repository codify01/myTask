import React from "react";

const Onetasklist = ({ href, title }) => {

    return(

        <>
            <li className="font-medium text-base ms-2 opacity-50 rounded-md shadow hover:shadow-accent-black py-3 px-2 hover:opacity-100 hover:bg-pry hover:text-accent-white transition-all duration-300">
                <a className="" href={href}>{title}</a>
            </li>
        </>

    )

}

export default Onetasklist