import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import BtnOne from '../../../components/Buttons/BtnOne';
import Headline from '../../../components/Headline';
import { FaUpload } from 'react-icons/fa';
import axios from 'axios';

const Createtask = () => {
	const [inputValue, setInputValue] = useState('');
	const [selectedModerators, setSelectedModerators] = useState([]);
	const [fileName, setFileName] = useState('');
	const [moderators, setModerators] = useState([]);

	useEffect(() => {
		const fetchModerators = async () => {
			try {
				const { data } = await axios.get('https://apitask.sunmence.com.ng/alluser.php');
				console.log(data.users);
				setModerators(data.users);
			} catch (error) {
				console.error('Error fetching moderators:', error);
			}
		};

		fetchModerators();
	}, []);

	const formik = useFormik({
		initialValues: {
			task_name: '',
			task_image: '',
			task_description: '',
			priority: '',
			moderators: [],
			assignee_name: '',
			assignee_email: '',
			time: '',
			date: '',
			status: 'in-progress'
		},
		onSubmit: (values) => {
			console.log({ ...values, fileName });
			const url = 'https://apitask.sunmence.com.ng/task.php';

			axios.post(url, { ...values, fileName }).then((response) => {
				console.log(response.data);
			}).catch((err) => {
				console.log(err.message);
			});
		},
	});

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleModeratorSelect = (moderator) => {
		if (!selectedModerators.some((m) => m.email === moderator.email)) {
			const newSelectedModerators = [...selectedModerators, moderator];
			setSelectedModerators(newSelectedModerators);
			formik.setFieldValue('moderators', newSelectedModerators.map(m => m.email));
		}
		setInputValue('');
	};

	const handleRemoveModerator = (moderator) => {
		const updatedModerators = selectedModerators.filter((m) => m.email !== moderator.email);
		setSelectedModerators(updatedModerators);

		formik.setFieldValue('moderators', updatedModerators.map(m => m.email));
	};

	const filteredModerators = moderators.filter(
		(moderator) =>
			moderator.firstname && 
			moderator.firstname.toLowerCase().includes(inputValue.toLowerCase()) &&
			!selectedModerators.some((m) => m.email === moderator.email)
	);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFileName(file.name);
		}
	};

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
					/>
				</div>

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
					/>
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Priority</label>
					<select
						className="my-3 p-3 input-bg input-styles"
						name="priority"
						onChange={formik.handleChange}
						value={formik.values.priority}
					>
						<option value="" label="Select priority" />
						<option value="low" label="Low" />
						<option value="medium" label="Medium" />
						<option value="high" label="High" />
					</select>
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
						onChange={handleInputChange}
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
					<label>Assignee Email</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="email"
						name="assignee_email"
						onChange={formik.handleChange}
						value={formik.values.assignee_email}
					/>
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Assignee Name</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="text"
						name="assignee_name"
						onChange={formik.handleChange}
						value={formik.values.assignee_name}
					/>
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Due Date</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="date"
						name="date"
						onChange={formik.handleChange}
						value={formik.values.date}
					/>
				</div>

				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Time</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="time"
						name="time"
						onChange={formik.handleChange}
						value={formik.values.time}
					/>
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
