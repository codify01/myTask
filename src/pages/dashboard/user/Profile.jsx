import React, { useState } from "react";
import { useFormik } from "formik";
import Headline from "../../../components/Headline";
import BtnOne from "../../../components/Buttons/BtnOne";
import PageTitle from "../../../utilities/PageTitle";
import { FaUpload } from "react-icons/fa";

const Profile = () => {
    const [fileName, setFileName] = useState('')

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            password: '',
            profile_picture: null 
        },
        onSubmit: (values) => {
            console.log('Form Submitted:', values);

        },
    });
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            formik.setFieldValue('profile_picture', file)
        }
    };
    return (
        <div className="sContainer pt-3">
            <PageTitle title={'Profile'} />
            <Headline title={"Update Profile"} />
            <form
                onSubmit={formik.handleSubmit}
                className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]"
            >
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="firstname">Edit First Name</label>
                    <input
                        name="firstname"
                        id="firstname"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                    />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="lastname">Edit Last Name</label>
                    <input
                        name="lastname"
                        id="lastname"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label>Upload Image</label>
                    <input
                        className="my-3 p-3 input-bg input-styles rounded-lg focus:outline-none"
                        type="file"
                        id="profile_picture"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="profile_picture"
                        className="my-3 flex items-center py-3.5 px-2 input-bg input-styles cursor-pointer"
                    >
                        <FaUpload className="mr-2" />
                        {fileName ? fileName : 'Choose File'}
                    </label>
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="password">Reset Password</label>
                    <input
                        name="password"
                        id="password"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <BtnOne
                    name={"Update Details"}
                    style={'mx-auto my-3 py-3 border-0 md:w-1/5 rounded-md justify-center bg-pry text-white'}
                    type="submit"
                />
            </form>
        </div>
    );
};

export default Profile;
