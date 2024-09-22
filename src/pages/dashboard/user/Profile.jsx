import React from "react";
import Headline from "../../../components/Headline";
import BtnOne from "../../../components/Buttons/BtnOne";
import PageTitle from "../../../utilities/PageTitle";

const Profile = () => {

    return (

        <div className="sContainer pt-3">
            <PageTitle title={'Profile'}/>
            <Headline title={"Update Profile"} />
            <form action="" className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]">
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="fName">Edit First Name</label>
                    <input name="fName" id="fName" className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="text" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="lName">Edit Last Name</label>
                    <input name="lName" id="lName" className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="text" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="uPic">Upload Image</label>
                    <input name="uPic" id="uPic" className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="file" />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="uPass">Reset Password</label>
                    <input name="uPass" id="uPass" className="my-3 p-3 input-bg bg-neutral-200 input-styles" type="password" />
                </div>
                <BtnOne name={"Update Details"} style={'mx-auto my-3 py-3 border-0 md:w-1/5 w-1/3 rounded-md justify-center bg-pry'}/>
            </form>
        </div>

    )

}

export default Profile;