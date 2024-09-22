import React, { useState } from 'react';
import { useFormik } from 'formik';
import BtnOne from '../../../components/Buttons/BtnOne';
import Headline from '../../../components/Headline';
import { FaUpload } from 'react-icons/fa';

const teamMembers = ['Oluwamayokun', 'Oluwaseun', 'Adebayo', 'Tobi', 'Chidi'];

const Createtask = () => {
	const [inputValue, setInputValue] = useState('');
	const [selectedModerators, setSelectedModerators] = useState([]);
	const [fileName, setFileName] = useState('');

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			dueDate: '',
			duration: '',
			moderators: [],
		},
		onSubmit: (values) => {
			console.log({ ...values, fileName });
		},
	});

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleModeratorSelect = (member) => {
		if (!selectedModerators.includes(member)) {
			setSelectedModerators([...selectedModerators, member]);
			formik.setFieldValue('moderators', [...selectedModerators, member]);
		}
		setInputValue('');
	};

	const handleRemoveModerator = (member) => {
		const updatedModerators = selectedModerators.filter((m) => m !== member);
		setSelectedModerators(updatedModerators);
		formik.setFieldValue('moderators', updatedModerators);
	};

	const filteredMembers = teamMembers.filter(
		(member) =>
			member.toLowerCase().includes(inputValue.toLowerCase()) &&
			!selectedModerators.includes(member)
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
					<label>Title</label>
					<input
						className="my-3 p-3 input-bg bg-neutral-200 input-styles"
						type="text"
						name="title"
						onChange={formik.handleChange}
						value={formik.values.title}
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
						name="description"
						cols="30"
						rows="5"
						className="resize-none my-3 p-3 input-bg input-styles"
						onChange={formik.handleChange}
						value={formik.values.description}
					/>
				</div>
				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Due Date</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="date"
						name="dueDate"
						onChange={formik.handleChange}
						value={formik.values.dueDate}
					/>
				</div>
				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Duration</label>
					<input
						className="my-3 p-3 input-bg input-styles"
						type="time"
						name="duration"
						onChange={formik.handleChange}
						value={formik.values.duration}
					/>
				</div>
				<div className="md:w-[48.5%] w-full flex flex-col">
					<label>Task Moderators</label>
					<div className="mt-2">
						{selectedModerators.map((member) => (
							<span
								key={member}
								className="mr-2 p-1 input-styles rounded input-bg"
							>
								{member}
								<button
									className="ml-2 text-red-500"
									onClick={() => handleRemoveModerator(member)}
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
					{inputValue && filteredMembers.length > 0 && (
						<ul className="shadow-md rounded-md max-h-40 overflow-y-auto">
							{filteredMembers.map((member) => (
								<li
									key={member}
									className="p-2 hover:bg-gray-400 hover:text-accent-black cursor-pointer"
									onClick={() => handleModeratorSelect(member)}
								>
									{member}
								</li>
							))}
						</ul>
					)}
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
