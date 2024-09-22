import React from 'react'
import { Link } from 'react-router-dom'
import BtnOne from '../../components/Buttons/BtnOne'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (

    <div className='flex flex-col w-full overflow-y-auto'>
      <div className='sContainer'>
        <div className="flex flex-col h-[85vh] lg:flex-row items-center bg-accent-black">
            <div className="py-16 w-full text-center lg:text-start lg:w-3/4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Be the master of effective work by using a well-ordered web app for your team</h1>
                <div className="mt-8 flex gap-6 items-center justify-center lg:justify-start">
                  <Link to={"/login"}><BtnOne name={"Get Started"} style={'border-accent-white bg-pry px-8 h-[45px] mx-auto'}/></Link>
                  <Link to={"/about"}><BtnOne name={"Learn more"} style={'border-0 bg-transparent px-0 text-neutral-400'}/></Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="hero-img">
                    <img src="https://ouch-cdn2.icons8.com/QeIdmLokccyhDGZ7z-SZ25s2wTv0AYumSD8Ytmnb8T8/rs:fit:368:311/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDMy/LzQ3MmUxMzVkLTc5/MGMtNDRiYi1iOWVj/LTU3MmNmMTRkM2Q3/Mi5wbmc.png" alt="hero" className="w-full max-w-md object-cover" />
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>



  )
}

export default HomePage