import React from 'react'

const TaskCardOne = ({ title, description, status, teamMembers }) => {
  return (
    <div className='bg-pry text-accent-white py-6 px-4 rounded-lg space-y-4'>
      <h1 className='text-2xl font-bold'>{title}</h1>

      <p className='line-clamp-2 text-sm leading-relaxed'>
        {description}
      </p>

      <div className='flex items-center justify-between'>
        <div className={`rounded-full px-4 py-0.5 text-sm font-semibold ${status === 'pending' ? 'bg-yellow-500' : status === 'in-progress' ? 'bg-blue-500': status === 'done' ? 'bg-green-500' : 'bg-gray-300'}`}>
          <span>{status}</span>
        </div>

        <div className='flex -space-x-3'>
          {teamMembers.slice(0, 4).map(({image}, index) => (
            <img
              key={index}
              src={image}
              alt={`team member ${index + 1}`}
              className='w-10 h-10 rounded-full border-2 border-white'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskCardOne
