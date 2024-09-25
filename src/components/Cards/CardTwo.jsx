import React from 'react';

const CardTwo = ({ count, category, bgColor, color, icon, font, headfont }) => {
	return (
		<div
<<<<<<< HEAD
			className={`flex flex-col items-center justify-center py-3 px-5 rounded-lg shadow-lg ${bgColor} hover:scale-105 transition-transform duration-300 text-center shadow`}
=======
			className={`flex flex-col items-center justify-center py-5 px-4 rounded-lg shadow-lg ${bgColor} hover:scale-105 transition-transform duration-300 text-center shadow`}
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
		>
			<div className={`p-1 rounded-full mb-3 ${color}`}>{icon}</div>
			<h3 className={`font-bold ${headfont} text-neutral-100`}>{category}</h3>
			<p className={`font-extrabold ${font} text-white`}>{count}</p>
		</div>
	);
};

export default CardTwo;
