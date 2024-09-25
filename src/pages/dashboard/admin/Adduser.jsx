import React, { useEffect } from "react";
import { useFormik } from "formik";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";
import {useToast} from "../../../hooks/useToast"
import axios from "axios";

const Adduser = () => {
	const {showSuccess, showError} = useToast()
	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			type:''
		},
		onSubmit: (values, {resetForm}) => {
			console.log(values);
			const url = 'https://apitask.sunmence.com.ng/user.php'
				axios.post(url, values).then(({data})=>{
					console.log(data)
					showSuccess(data.status)
					resetForm()
				}).catch((err)=>{
					console.log(err.message, err.code, err);
					alert(err.message)
					showError(err.message)
					resetForm()
				})
		},
		validate: (values) => {
			const errors = {};
			if (!values.firstname) {
				errors.firstname = "First Name is required";
			}
			if (!values.lastname) {
				errors.lastname = "Last Name is required";
			}
			if (!values.email) {
				errors.email = "Email is required";
			} else if (!/\S+@\S+\.\S+/.test(values.email)) {
				errors.email = "Invalid email address";
			}
			if (!values.password) {
				errors.password = "Password is required";
			}
			return errors;
		},
	});

	return (
		<div className="sContainer pt-3">
			<Headline title={"Create Member"} />
			<form onSubmit={formik.handleSubmit} className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]">
				<div className="flex flex-col md:w-[48.5%] w-full">
					<label htmlFor="firstName">First Name</label>
					<input
						id="firstname"
						name="firstname"
						type="text"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.firstname}
					/>
					{formik.errors.firstname && <div className="text-red-500">{formik.errors.firstname}</div>}
				</div>
				<div className="flex flex-col md:w-[48.5%] w-full">
					<label htmlFor="lastName">Last Name</label>
					<input
						id="lastname"
						name="lastname"
						type="text"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					{formik.errors.lastname && <div className="text-red-500">{formik.errors.lastname}</div>}
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="email">Email Address</label>
					<input
						id="email"
						name="email"
						type="email"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
				</div>
				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Role</label>
					<select
						className="my-3 p-3 input-bg input-styles"
						name="type"
						onChange={formik.handleChange}
						value={formik.values.priority}
					>
						<option value="" label="Whose account are you creating?"/>
						<option value="user" label="User" />
						<option value="admin" label="Admin" />
					</select>
				</div>
				<div className="md:w-[48.5%] flex flex-col w-full">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					{formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
				</div>
				<BtnOne name={"Create Member"} style={'mx-auto my-3 py-3 border-0 md:w-1/5  rounded-md justify-center bg-pry'} />
			</form>
		</div>
	);
}

export default Adduser;
