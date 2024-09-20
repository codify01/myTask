import React from 'react'
import img2 from "../assets/images/img2.png"
import img1 from "../assets/images/img1.jpeg"
import { CiBellOn } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className='h-[10vh] flex py-3 px-10 bg-black justify-between border-b border-neutral-600'>
      <h3 className='font-extrabold text-accent-white text-2xl'>myTask</h3>
      <div className="flex gap-3 items-center">
        <CiBellOn className='text-accent-white text-2xl cursor-pointer' />
        <button className="btn bg-pry text-accent-black font-semibold rounded-md flex items-center justify-between border-2 border-accent-white gap-2 h-[40px] px-2 w-[150px]">
          <span className='truncate w-10/12 text-sm'>Oluwamayokun</span>
          <img src={img1} alt="..." className="w-[32px] h-[32px] rounded-full object-cover" />
        </button>
      </div>
    </div>
  )
}

export default NavBar