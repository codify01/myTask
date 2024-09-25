import React, { useEffect, useState } from "react"
import img3 from "../../../assets/images/img3.png"
import Teamcard from "../../../components/Cards/Teamcard"
import Headline from '../../../components/Headline'
import PageTitle from "../../../utilities/PageTitle"
import axios from "axios"

const Teamembers = () => {
    const [teamMembers, setTeamMember] = useState([])
    const url = 'https://apitask.sunmence.com.ng/alluser.php'

   useEffect(()=>{
    axios.get(url).then(({data})=>{
        console.log(data, data.users)
        setTeamMember(data.users)
    }).catch((err)=>{
        console.log(err.message, err.code, err);
    })
   },[])

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

            <div className="sContainer w-[100%] overflow-y-auto pt-3">
                <PageTitle title={'Team memebers'}/>
               <Headline title={'Team members'}/>
               <div className="space-y-5">
                    {
                        teamMembers.map(({img, firstname}, index) => (
                            <Teamcard key={index} image={img} name={firstname}/>
                        ))
                    }
                </div>
            </div>

    )

}

export default Teamembers;