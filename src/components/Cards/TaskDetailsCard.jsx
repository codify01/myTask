import React from 'react'
import BtnOne from '../Buttons/BtnOne'
import { GiCheckMark } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'

const TaskDetailsCard = () => {
  return (
    <div className='border dark:border-neutral-500 border-neutral-400  py-10 px-5 rounded-md dark:bg-neutral-800 bg-neutral-200 space-y-10'>
       <div>
       <div className='flex items-center justify-between'>
       <h1 className='text-2xl font-bold'>The title of the task</h1>
       <p>Priority: high</p>
       </div>
        <p className='dark:text-neutral-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est fugit suscipit soluta modi. Quo, quisquam. Amet ex cum rem quaerat sunt tenetur et asperiores blanditiis ipsam? Assumenda beatae provident distinctio eveniet, eos aperiam, corrupti pariatur, sapiente quae inventore odit nihil doloremque minus possimus mollitia animi corporis delectus officia! Quas, recusandae?
        </p>
       </div>
        <div className='flex items-center justify-between'>
            <span>00:00:20</span>
            <div className='flex gap-2 items-center'>
                <BtnOne name={"I'm done"} icons={<GiCheckMark className='text-green-700'/>} style={'border-green-800 bg-green-900/20 hover:bg-green-900'}/>
                <BtnOne name={"I'm on leave"} icons={<RxCross1 className='text-red-700'/>} style={'border-red-800 bg-red-900/20 hover:bg-red-900'}/>
            </div>
        </div>
    </div>
  )
}

export default TaskDetailsCard