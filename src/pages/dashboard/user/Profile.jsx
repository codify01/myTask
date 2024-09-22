import React, { useState } from "react";
import { useFormik } from "formik";
import Headline from "../../../components/Headline";
import BtnOne from "../../../components/Buttons/BtnOne";
import PageTitle from "../../../utilities/PageTitle";
import { FaUpload } from "react-icons/fa";

const Profile = () => {
    const [fileName, setFileName] = useState(''); // To display selected file name

    const formik = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            uPass: '',
            uPic: null 
        },
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            formik.setFieldValue('uPic', file)
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
                    <label htmlFor="fName">Edit First Name</label>
                    <input
                        name="fName"
                        id="fName"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.fName}
                    />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="lName">Edit Last Name</label>
                    <input
                        name="lName"
                        id="lName"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lName}
                    />
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label>Upload Image</label>
                    <input
                        className="my-3 p-3 input-bg input-styles rounded-lg focus:outline-none"
                        type="file"
                        id="uPic"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="uPic"
                        className="my-3 flex items-center py-3.5 px-2 input-bg input-styles cursor-pointer"
                    >
                        <FaUpload className="mr-2" />
                        {fileName ? fileName : 'Choose File'}
                    </label>
                </div>
                <div className="flex flex-col md:w-[48.5%] w-full">
                    <label htmlFor="uPass">Reset Password</label>
                    <input
                        name="uPass"
                        id="uPass"
                        className="my-3 p-3 input-bg bg-neutral-200 input-styles"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.uPass}
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
