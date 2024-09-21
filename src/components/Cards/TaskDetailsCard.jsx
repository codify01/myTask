import React, { useState } from 'react'
import BtnOne from '../Buttons/BtnOne'
import { GiCheckMark } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { FaPaperclip } from 'react-icons/fa'

const TaskDetailsCard = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { id: 1, author: "Uthman", text: "Great progress so far!" },
    { id: 2, author: "Favour", text: "We need to speed up the process." }
  ]);

  const handleAddComment = () => {
    if (comment) {
      setCommentsList([...commentsList, { id: commentsList.length + 1, author: "Current User", text: comment }]);
      setComment('');
    }
  };

  return (
    <div className='border dark:border-neutral-500 border-neutral-400 py-8 px-6 rounded-lg dark:bg-neutral-800 bg-neutral-200 space-y-8'>
      <div>
        <div className='flex items-center justify-between mb-3'>
          <h1 className='text-2xl font-bold'>The title of the task</h1>
          <span className='text-sm font-semibold px-3 py-1 bg-red-200 text-red-700 rounded-full'>
            Priority: High
          </span>
        </div>
        <p className='dark:text-neutral-400 text-neutral-700 leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugit suscipit soluta modi. Quo, quisquam. Amet ex cum rem quaerat sunt tenetur et asperiores blanditiis ipsam? Assumenda beatae provident distinctio eveniet, eos aperiam, corrupti pariatur, sapiente quae inventore odit nihil doloremque.
        </p>
      </div>

      <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0'>
        <span className='font-semibold text-xl text-neutral-800 dark:text-neutral-400'>
          Due date: 00:00:20
        </span>
        <div className='flex gap-4 items-center'>
          <BtnOne 
            name={"I'm done"} 
            icons={<GiCheckMark className='text-green-700'/>} 
            style={'border-green-800 bg-green-900/20 hover:bg-green-800/40 transition-all duration-300'} 
          />
          <BtnOne 
            name={"I'm on leave"} 
            icons={<RxCross1 className='text-red-700'/>} 
            style={'border-red-800 bg-red-900/20 hover:bg-red-800/40 transition-all duration-300'} 
          />
        </div>
      </div>

      <div>
        <h2 className='font-semibold text-lg mb-2'>Comments</h2>
        <div className='space-y-4'>
          {commentsList.map(({ id, author, text }) => (
            <div key={id} className='bg-neutral-300 dark:bg-neutral-700 p-3 rounded'>
              <p className='font-bold'>{author}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className='mt-4'>
          <textarea 
            className='w-full p-3 rounded border border-neutral-400 dark:bg-neutral-700 bg-neutral-300 dark:text-neutral-200 text-neutral-600'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button 
            className='mt-2 px-4 py-2 bg-pry text-accent-white rounded hover:bg-pry-dark transition duration-300' 
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>
      </div>

      <div className='mt-6'>
        <h2 className='font-semibold text-lg mb-2'>Attachments</h2>
        <div className='flex gap-2 items-center'>
          <FaPaperclip className='text-neutral-500 dark:text-neutral-400' />
          <span className='text-neutral-700 dark:text-neutral-400'>No attachments added</span>
          <button className='ml-auto px-3 py-2 bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded hover:bg-neutral-400'>
            Attach File
          </button>
        </div>
      </div>


      <div className='mt-6'>
        <h2 className='font-semibold text-lg mb-2'>Activity Log</h2>
        <ul className='space-y-2 list-disc list-inside'>
          <li className='text-sm dark:text-neutral-400 text-neutral-600'>Uthman completed Task 1 - 2 hours ago</li>
          <li className='text-sm dark:text-neutral-400 text-neutral-600'>Favour left a comment - 5 hours ago</li>
          <li className='text-sm dark:text-neutral-400 text-neutral-600'>Task status changed to "In Progress" - 1 day ago</li>
        </ul>
      </div>
    </div>
  )
}

export default TaskDetailsCard;
