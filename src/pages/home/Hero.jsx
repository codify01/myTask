import React from 'react';
import BtnTwo from '../../components/Buttons/BtnTwo';
import hero from '../../assets/images/hero.svg';
const Hero = () => {
	return (
		<div className="h-[85vh] flex md:flex-row md:justify-between items-center w-full px-5 container">
			<div className="md:basis-[40%]">
				<h1 className="text-2xl md:text-4xl font-bold mb-7 leading-10">
					Be the master of effective work by using a well ordered web app for
					your team
				</h1>
				<div className="space-x-2">
					<BtnTwo name={'Get Started'} style={'bg-pry'} path={'login'}/>
					<BtnTwo name={'Learn More'} />
				</div>
			</div>
			<div className="basis-1/2 hidden md:block">
				<img src={hero} alt="" className="w-[90%]" />
			</div>
		</div>
	);
};

export default Hero;
