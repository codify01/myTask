import React from "react";

const CardTwo = ({count, category, space, font, headfont}) => {

    return (

        <div class={`flex flex-col items-center ${space} mb-3`}>
            <small class={`font-bold text-neutral-500 ${headfont}`}>{category}</small>
            <h1 class={`number rounded-full font-bold ${font}`}>{count}</h1>
        </div>

    )

}

export default CardTwo