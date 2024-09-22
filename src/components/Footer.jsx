import React from 'react';
import img2 from '../assets/images/img2.png';

const Footer = () => {
	return (
		<footer className="bg-black h-[7vh] flex items-center px-3">
			<div className="flex justify-between items-center container">
				<div>
					<small>&copy; Sunmence 2024</small>
				</div>
				<div className='hidden md:block'>
					<img src={img2} alt="..." className="w-32" />
				</div>
				<div className="col-span-1 text-end">
					<small>Policy privacy</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
