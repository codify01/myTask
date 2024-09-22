import React from 'react'
import { Link } from 'react-router-dom'
import BtnOne from '../../components/Buttons/BtnOne'
import Footer from '../../components/Footer'
import Hero from './Hero'

const HomePage = () => {
  return (

    <div className='flex flex-col w-full overflow-y-auto'>
      <Hero/>
   
      <Footer/>
    </div>



  )
}

export default HomePage