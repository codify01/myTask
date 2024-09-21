import React from "react";

const CardTwo = ({count, category, space, font, headfont}) => {

    return (

        <div className={` ${space} mb-3`}>
            <small className={`font-bold text-neutral-500 w-32 ${headfont}`}>{category}</small>
            <h1 className={`number rounded-full font-bold ${font}`}>{count}</h1>
        </div>

    )

}

export default CardTwo