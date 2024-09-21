import React from "react"
import img3 from "../../../assets/images/img3.png"
import Teamcard from "../../../components/Cards/Teamcard"
import Headline from '../../../components/Headline'

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

            <div className="sContainer w-[100%] overflow-y-auto">
               <Headline title={'Team members'}/>
               <div className="space-y-5">
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