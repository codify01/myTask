import React from "react";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";

const Adduser = () => {

    return (

        <div className="sContainer pt-3">
            <Headline title={"Create Member"} />
            <form action="" className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]">
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="">Full Name</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="text" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="">Email Address</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="email" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="">Password</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="password" />
                </div>
                <BtnOne name={"Create Member"} style={'mx-auto my-3 py-3 border-0 md:w-1/5 w-1/3 rounded-md justify-center bg-pry'}/>
            </form>
        </div>

    )

}

export default Adduser;