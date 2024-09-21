import React from "react"
import img3 from "../../../assets/images/img3.png"
import Teamcard from "../../../components/Cards/Teamcard"

const Teamembers = () => {

    const EachTeaMembers = [
        {
            img : img3,
            name : "oluwamayokun",
        },
        {
            img : img3,
            name : "reuben",
        },
        {
            img : img3,
            name : "ruquoyah",
        },
    ]

    return (

            <div className="personnels">
                <div className="flex items-center w-full mb-8 justify-center">
                    <h1 className="md:basis-1/3 basis-2/3 text-4xl font-bold">Team Members</h1>
                    <hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3" />
                </div>
                <div className="flex flex-col space-y-5">
                    {
                        EachTeaMembers.map(({img, name}, index) => (
                            <Teamcard key={index} image={img} name={name}/>
                        ))
                    }
                </div>
            </div>

    )

}

export default Teamembers;