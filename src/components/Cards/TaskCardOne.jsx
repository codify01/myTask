import React from 'react'

const TaskCardOne = () => {
  return (
    <div className='bg-pry text-accent-white py-6 px-3 rounded space-y-3'>
      <h1 className='text-2xl font-bold'>Task title</h1>
      <p className='line-clamp-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis quasi iure, suscipit modi omnis, ipsum aliquid, iusto repellat facilis dolores! Dolore temporibus aperiam cumque perferendis, modi aliquid reiciendis cum?</p>
      <div className='flex items-center justify-between'>
        <div>
          <span className='bg-neutral-200 w-full'>
            <hr className='border '/>
          </span>
        </div>
        <div className='flex '>
          <img src="https://picsum.photos/200/300" alt="" className=' w-10 h-10 rounded-full'/>
          <img src="https://picsum.photos/200/300" alt="" className='-ms-3 w-10 h-10 rounded-full'/>
          <img src="https://picsum.photos/200/300" alt="" className='-ms-3 w-10 h-10 rounded-full'/>
          <img src="https://picsum.photos/200/300" alt="" className='-ms-3 w-10 h-10 rounded-full'/>
        </div>
      </div>

    </div>
  )
}

export default TaskCardOne