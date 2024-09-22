import React from "react";
import { useFormik } from "formik";
import BtnOne from "../../../components/Buttons/BtnOne";
import Headline from "../../../components/Headline";

const Adduser = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
			// Handle the form submission (e.g., API call)
		},
		validate: (values) => {
			const errors = {};
			if (!values.firstName) {
				errors.firstName = "First Name is required";
			}
			if (!values.lastName) {
				errors.lastName = "Last Name is required";
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
						id="firstName"
						name="firstName"
						type="text"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					{formik.errors.firstName && <div className="text-red-500">{formik.errors.firstName}</div>}
				</div>
				<div className="flex flex-col md:w-[48.5%] w-full">
					<label htmlFor="lastName">Last Name</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					{formik.errors.lastName && <div className="text-red-500">{formik.errors.lastName}</div>}
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
				<div className="flex flex-col w-full">
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
