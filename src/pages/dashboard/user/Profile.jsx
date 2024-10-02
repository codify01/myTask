import React, { useState } from "react";
import { useFormik } from "formik";
import Headline from "../../../components/Headline";
import BtnOne from "../../../components/Buttons/BtnOne";
import PageTitle from "../../../utilities/PageTitle";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

const Profile = () => {
    const [fileName, setFileName] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    const formik = useFormik({
        initialValues: {
            id:9,
            firstname: user.firstname,
            lastname: user.lastname,
            password: '',
            profilePic: null, // Initialize the profilePic field
        },
        onSubmit: (values) => {
            console.log(values);
            
            const formData = new FormData();
            formData.append('id', values.firstname)
            formData.append('firstname', values.firstname);
            formData.append('lastname', values.lastname);
            formData.append('password', values.password);

            if (values.profilePic) {
                formData.append('profilePic', values.profilePic); // Append file to FormData
            }
            console.log(values);
            
            axios.post('https://apitask.sunmence.com.ng/edit.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                console.log(res);
                alert('Profile Updated Successfully');
            })
            .catch((err) => {
                console.log(err);
            });
        },
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            formik.setFieldValue('profilePic', file); // Set the file directly, not FormData
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
                <input type="hidden" name="id" value={formik.values.id}/>
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
                        id="profilePic"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="profilePic"
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
