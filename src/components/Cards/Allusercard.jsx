import React from "react";
import BtnOne from "../Buttons/BtnOne";
import { GiTrashCan } from "react-icons/gi";

const AllUserCard = ({ id, image, name, email }) => {

    return (
        
        <>
            <tr className="flex justify-between items-center">
                <td className="w-[10%]">{id}</td>
                <td>
                    <div className="w-[80px] h-[80px] bg-accent-white rounded-full overflow-hidden border-4 border-pry mx-auto flex-shrink-0">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>
                </td>
                <td>{name}</td>
                <td className="truncate">{email}</td>
                <td><BtnOne icons={<GiTrashCan className='text-red-700 size-5'/>} style={'border-red-800 bg-red-900/20 ps-0 pe-2 hover:bg-red-900 mx-auto'}/></td>
            </tr>
        </>

    );
};

export default AllUserCard;
