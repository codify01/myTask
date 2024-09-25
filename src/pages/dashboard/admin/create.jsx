import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import BtnOne from '../../../components/Buttons/BtnOne';
import Headline from '../../../components/Headline';
import { FaUpload } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	task_name: Yup.string()
		.required('Task name is required')
		.min(3, 'Task name must be at least 3 characters'),
	task_description: Yup.string()
		.required('Task description is required')
		.min(10, 'Description must be at least 10 characters'),
	priority: Yup.string().required('Please select a priority'),
	date: Yup.date().required('Please select a due date'),
	time: Yup.string().required('Please select a time'),
});

const Createtask = () => {
	const [inputValue, setInputValue] = useState('');
	const [selectedModerators, setSelectedModerators] = useState([]);
	const [fileName, setFileName] = useState('');
	const [taskImageBase64, setTaskImageBase64] = useState('');
	const [moderators, setModerators] = useState([]);

	useEffect(() => {
		const fetchModerators = async () => {
			try {
				const { data } = await axios.get('https://apitask.sunmence.com.ng/alluser.php');
				setModerators(data.users);
			} catch (error) {
				toast.error('Error fetching moderators');
			}
		};

		fetchModerators();
	}, []);

	const formik = useFormik({
		initialValues: {
			task_name: '',
			task_description: '',
			priority: '',
			moderators: [],
			time: '',
			date: '',
			status: 'in-progress',
		},
		validationSchema,
		onSubmit: async (values, { resetForm }) => {
			const url = 'https://apitask.sunmence.com.ng/task.php';

			const taskData = {
				...values,
				moderators: selectedModerators.map((m) => m.email),
				task_img: taskImageBase64,
			};

			try {
				const response = await axios.post(url, taskData, {
					headers: { 'Content-Type': 'application/json' },
				});
				if (response.data) {
					toast.success(response.data.message);
					resetForm();
					setFileName('');
					setSelectedModerators([]);
					setTaskImageBase64('');
				}
			} catch (error) {
				toast.error(error.message);
			}
		},
	});

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setFileName(selectedFile.name);

			const reader = new FileReader();
			reader.onloadend = () => {
				setTaskImageBase64(reader.result)
			};
			reader.readAsDataURL(selectedFile)
		}
	};

	const handleModeratorSelect = (moderator) => {
		if (!selectedModerators.some((m) => m.email === moderator.email)) {
			const newSelectedModerators = [...selectedModerators, moderator];
			setSelectedModerators(newSelectedModerators);
			formik.setFieldValue('moderators', newSelectedModerators.map((m) => m.email));
		}
		setInputValue('');
	};

	const handleRemoveModerator = (moderator) => {
		const updatedModerators = selectedModerators.filter((m) => m.email !== moderator.email);
		setSelectedModerators(updatedModerators);
		formik.setFieldValue('moderators', updatedModerators.map((m) => m.email));
	};

	const filteredModerators = moderators.filter(
		(moderator) =>
			moderator.firstname &&
			moderator.firstname.toLowerCase().includes(inputValue.toLowerCase()) &&
			!selectedModerators.some((m) => m.email === moderator.email)
	);

	return (
		<div className="sContainer overflow-y-auto pt-3">
			<Headline title={'Assign Task'} />
			<form
				onSubmit={formik.handleSubmit}
				className="flex mx-auto flex-wrap items-center justify-between w-90% max-w-[100%]"
			>
				<div className="flex flex-col md:w-[48.5%] w-full">
					<label>Task Name</label>
					<input
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						type="text"
						name="task_name"
						onChange={formik.handleChange}
						value={formik.values.task_name}
						onBlur={formik.handleBlur} 
					/>
					{formik.touched.task_name && formik.errors.task_name ? (
						<div className="text-red-500 text-sm">{formik.errors.task_name}</div>
					) : null}
				</div>

				{/* File Upload */}
				<div className="flex flex-col md:w-[48.5%] w-full">
					<label>Image</label>
					<input
						className="my-3 p-3 input-bg input-styles rounded-lg focus:outline-none"
						type="file"
						id="fileInput"
						style={{ display: 'none' }}
						onChange={handleFileChange}
					/>
					<label
						htmlFor="fileInput"
						className="my-3 flex items-center py-3.5 px-2 input-bg input-styles cursor-pointer"
					>
						<FaUpload className="mr-2" />
						{fileName || 'Choose File'}
					</label>
				</div>

				<div className="flex flex-col w-full">
					<label>Description</label>
					<textarea
						name="task_description"
						cols="30"
						rows="5"
						className="resize-none my-3 p-3 input-bg input-styles"
						onChange={formik.handleChange}
						value={formik.values.task_description}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.task_description && formik.errors.task_description ? (
						<div className="text-red-500 text-sm">{formik.errors.task_description}</div>
					) : null}
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Priority</label>
					<select
						className="my-3 p-3 input-bg input-styles"
						name="priority"
						onChange={formik.handleChange}
						value={formik.values.priority}
						onBlur={formik.handleBlur}
					>
						<option value="" label="Select priority" />
						<option value="low" label="Low" />
						<option value="medium" label="Medium" />
						<option value="high" label="High" />
					</select>
					{formik.touched.priority && formik.errors.priority ? (
						<div className="text-red-500 text-sm">{formik.errors.priority}</div>
					) : null}
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Task Moderators</label>
					<div className="mt-2">
						{selectedModerators.map((moderator) => (
							<span
								key={moderator.email}
								className="mr-2 p-1 input-styles rounded input-bg"
							>
								{moderator.firstname}
								<button
									className="ml-2 text-red-500"
									onClick={() => handleRemoveModerator(moderator)}
								>
									x
								</button>
							</span>
						))}
					</div>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Type to add moderators..."
					/>
					{inputValue && filteredModerators.length > 0 && (
						<ul className="shadow-md rounded-md max-h-40 overflow-y-auto">
							{filteredModerators.map((moderator) => (
								<li
									key={moderator.email}
									className="p-2 hover:bg-gray-400 hover:text-accent-black cursor-pointer"
									onClick={() => handleModeratorSelect(moderator)}
								>
									{moderator.firstname} ({moderator.email})
								</li>
							))}
						</ul>
					)}
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Due Date</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="date"
						name="date"
						onChange={formik.handleChange}
						value={formik.values.date}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.date && formik.errors.date ? (
						<div className="text-red-500 text-sm">{formik.errors.date}</div>
					) : null}
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Time</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="time"
						name="time"
						onChange={formik.handleChange}
						value={formik.values.time}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.time && formik.errors.time ? (
						<div className="text-red-500 text-sm">{formik.errors.time}</div>
					) : null}
				</div>

				<BtnOne
					name={'Assign'}
					style={
						'mx-auto my-3 py-3 border-0 md:w-1/5 w-1/3 rounded-md justify-center bg-pry text-white'
					}
				/>
			</form>
		</div>
	);
};

export default Createtask;
