import React from "react";
import BtnOne from "../../../components/Buttons/BtnOne";

const Adduser = () => {

    return (

        <div className="sContainer">
            <div className="flex items-center w-full mb-4 justify-center">
				<h1 className="md:basis-2/3 basis-2/3 text-4xl font-bold">Create Member</h1>
				<hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3" />
			</div>
            <form action="" className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]">
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="">Full Name</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="text" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="">Email Address</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="email" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label for="">Image</label>
                    <input className="my-3 p-2 input-bg input-styles" type="file" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="">Password</label>
                    <input className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="password" />
                </div>
                <BtnOne name={"Create Member"} style={'mx-auto my-3 py-3 border-0 md:w-1/5 w-1/3 rounded-md justify-center bg-pry'}/>
            </form>
        </div>

    )

}

export default Adduser;