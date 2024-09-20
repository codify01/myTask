import React from "react";

const Onetasklist = ({ href, title }) => {

    return(

        <>
<<<<<<< HEAD
            <li className="font-medium text-base ms-2 opacity-50 rounded-md shadow hover:shadow-accent-black py-3 px-2 hover:opacity-100 hover:bg-pry hover:text-accent-white transition-all duration-300">
                <a className="" href={href}>{title}</a>
            </li>
=======
            <a className="font-light text-base ms-2 opacity-50 rounded-md shadow-lg hover:shadow-accent-black p-2 hover:opacity-100 hover:bg-pry" href={href}>
                {title}
            </a>
>>>>>>> 6fee6408da33ae6da3d681311d0c790f5068729a
        </>

    )

}

export default Onetasklist