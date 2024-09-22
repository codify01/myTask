import React from 'react'
import { Link } from 'react-router-dom'
import BtnOne from '../../components/Buttons/BtnOne'
import Footer from '../../components/Footer'
import Hero from './Hero'
import PageTitle from '../../utilities/PageTitle'

const HomePage = () => {
  return (

    <div className='flex flex-col w-full overflow-y-auto'>
      <PageTitle title={'Home page'}/>
      <Hero/>
   
      <Footer/>
    </div>



  )
}

export default HomePage