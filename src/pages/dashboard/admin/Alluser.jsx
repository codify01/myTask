import React from "react";
import Headline from "../../../components/Headline";
import img3 from "../../../assets/images/img3.png"
import AllUserCard from "../../../components/Cards/Allusercard";
import { TfiPlus } from "react-icons/tfi";
import BtnOne from "../../../components/Buttons/BtnOne";
import { Link } from "react-router-dom";

const Allusers = () => {

    const AllUserArray = [
        {
           id: "1",
           name: "Oluwamayokun",
           src: img3,
           email: "adelekeoluwamayokun27@gmail.com" 
        },
        {
           id: "2",
           name: "Reuben",
           src: img3,
           email: "farinderif@gmail.com" 
        },
        {
           id: "3",
           name: "Oluwamayokun",
           src: img3,
           email: "adelekeoluwamayokun27@gmail.com" 
        },
        {
           id: "4",
           name: "Oluwamayokun",
           src: img3,
           email: "adelekeoluwamayokun27@gmail.com" 
        },
        {
           id: "5",
           name: "Oluwamayokun",
           src: img3,
           email: "adelekeoluwamayokun27@gmail.com" 
        },
    ]

    return (

        <div className="sContainer w-[100%] overflow-y-auto -space-y-5 pt-3">
            <Headline title={'Team members'}/>
            <Link to={'/admin/add-user'}>
                <BtnOne name={"Add Member"} icons={<TfiPlus className='text-green-700 size-4'/>} style={'border-green-800 bg-green-900/60 -translate-y-10 hover:bg-green-900 px-3 ms-auto'}/>
            </Link>
            <div className="table-responsive w-full border border-neutral-700 rounded-lg overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="flex justify-between mb-3">
                            <th scope="col" className="w-[10%]">User ID</th>
                            <th scope="col">User Image</th>
                            <th scope="col">Member's Name</th>
                            <th scope="col">Member's Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="space-y-3">
                        {
                            AllUserArray.map(({id, name, src, email}, index) => (
                                <AllUserCard key={index} id={id} image={src} name={name} email={email} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default Allusers