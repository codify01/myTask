import React from 'react';
import { motion } from 'framer-motion';
import BtnTwo from '../../components/Buttons/BtnTwo';
import hero from '../../assets/images/hero.svg';

const Hero = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="h-[85vh] flex md:flex-row md:justify-between items-center w-full px-5 container"
    >
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
        className="md:basis-[40%]"
      >
        <motion.h1 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-7 leading-10"
        >
          Be the master of effective work by using a well ordered web app for your team
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-x-2"
        >
          <BtnTwo name={'Get Started'} style={'bg-pry'} path={'login'}/>
          <BtnTwo name={'Learn More'} path={'about'}/>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="basis-1/2 hidden md:block"
      >
        <motion.img 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          src={hero} 
          alt="" 
          className="w-[90%]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;