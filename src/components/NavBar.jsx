import React from 'react'
import img2 from "../assets/images/img2.png"
import img1 from "../assets/images/img1.jpeg"
import { CiBellOn } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const ignoredPages = ['/login']
  let homePath = ['/']
  const location = useLocation()
  const isHere = ignoredPages.includes(location.pathname)
  const isHomePage = homePath.includes(location.pathname)
  return (
  !isHere?
  <header className='bg-accent-white dark:bg-neutral-950'>
      <nav className='h-[8vh] bg-accent-black dark:bg-neutral-900 fixed w-full z-20 flex items-center px-5  justify-between border-b border-neutral-400 dark:border-neutral-500'>
      <Link to={'/'}><img src={img2} alt="..." className="w-32 mx-auto" /></Link>
      <div className="flex gap-3 items-center">
        <CiBellOn className='text-2xl' />
       {!isHomePage? <button className="btn bg-pry text-accent-black font-semibold rounded-md flex items-center justify-between border-2 border-accent-white gap-2 px-2 py-1 w-[150px]">
          <span className='truncate w-10/12 text-sm'>Oluwamayokun</span>
          <img src={img1} alt="..." className="w-5 h-5 rounded-full object-cover" />
        </button>:
        <Link to={'/login'} className='bg-pry py-1.5 px-4 rounded font-medium'>Get started</Link>
        }
      </div>
    </nav>
    <div className='h-[8vh]'>

    </div>
  </header>
  : null
  )
}

export default NavBar