import React, { useState } from 'react';
import BtnOne from '../Buttons/BtnOne';
import { GiCheckMark } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { toast } from 'react-hot-toast';
import { FaPaperclip } from 'react-icons/fa';
import axios from 'axios';
import { div } from 'framer-motion/client';

const TaskDetailsCard = ({ task }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState(task.comments || []);
  const [attachments, setAttachments] = useState(task.attachments || []);
  const [activityLog, setActivityLog] = useState(task.activityLog || []);
  const [taskStatus, setTaskStatus] = useState(task.status || 'in-progress');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleAddComment = () => {
    if (comment) {
      const newComment = { id: commentsList.length + 1, author: user.firstname, text: comment };
      setCommentsList([...commentsList, newComment]);
      setActivityLog([
        ...activityLog,
        { action: 'commented', author: user.firstname, time: 'Just now' }
      ]);
      setComment('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newAttachment = { id: attachments.length + 1, name: file.name, type: file.type, file };
      setAttachments([...attachments, newAttachment]);
      setActivityLog([
        ...activityLog,
        { action: 'attached a file', author: user.firstname, time: 'Just now' }
      ]);
    }
  };

  const handleStatusChange = async (status) => {
    try {
      const response = await axios.post('https://apitask.sunmence.com.ng/alltask.php', {
        id: task.id,
        status: status,
      })
      console.log(response.data);
      
      if (response.data.status === 'success') {
        setTaskStatus(status);
        setActivityLog([
          ...activityLog,
          { action: `changed status to ${status}`, author: user.firstname, time: 'Just now' }
        ]);
        toast.success(`Task status changed to ${status}`)
      } else {
        toast.error('Failed to update task status')
      }
    } catch (error) {
      toast.error('Error updating task status')
    }
  };

  return (
    <div className='border dark:border-neutral-500 border-neutral-400 py-8 px-6 rounded-lg dark:bg-neutral-800 bg-neutral-200 space-y-8'>
      <div>
        <div className='md:flex md:flex-row md:items-center md:justify-between mb-3 space-y-2'>
          <h1 className='text-2xl font-bold'>{task.task_name}</h1>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${task.priority === 'high' ? 'bg-red-200 text-red-700' : task.priority === 'medium' ? 'bg-orange-200 text-orange-700': 'bg-green-200 text-green-700'}`}>
            Priority: {task.priority}
          </span>
        </div>
        <p className='dark:text-neutral-400 text-neutral-700 leading-relaxed'>{task.task_description}</p>
      </div>

      <div className='flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0'>
        <span className='font-semibold text-xl text-neutral-800 dark:text-neutral-400'>
          Due date: {task.date}
        </span>
        <div className='flex gap-4 items-center'>
          {task.status === 'in-progress' ? (
           <button  onClick={() => handleStatusChange('pending')}>
            <BtnOne
              name={"I'm done"}
              icons={<GiCheckMark className='text-green-700' />}
              style={'border-green-800 bg-green-900/20 hover:bg-green-800/40 transition-all duration-300'}
             
            />
           </button>
          ) : (
            <button onClick={() => handleStatusChange('in-progress')} >
                  <BtnOne
              name={"I'm not done"}
              icons={<GiCheckMark className='text-yellow-700' />}
              style={'border-yellow-800 bg-yellow-900/20 hover:bg-yellow-800/40 transition-all duration-300'}
            />
              </button>
          )}
          <BtnOne
            name={"I'm on leave"}
            icons={<RxCross1 className='text-red-700' />}
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
        <div className='space-y-2'>
          {attachments.length === 0 && (
            <span className='text-neutral-700 dark:text-neutral-400'>No attachments added</span>
          )}
          {attachments.map(({ id, name, type, file }) => (
            <div key={id} className='flex items-center'>
              {type.startsWith('image/') ? (
                <img src={URL.createObjectURL(file)} alt={name} className='w-16 h-16 object-cover rounded mr-2' />
              ) : (
                <>
                  <FaPaperclip className='text-neutral-500 dark:text-neutral-400' />
                  <span className='ml-2'>{name}</span>
                </>
              )}
            </div>
          ))}
          <div className='flex gap-2 items-center'>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className='ml-auto px-3 py-2 bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded hover:bg-neutral-400 cursor-pointer'
            >
              Attach File
            </label>
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <h2 className='font-semibold text-lg mb-2'>Activity Log</h2>
        <ul className='space-y-2 list-disc list-inside'>
          {activityLog.map((log, index) => (
            <li key={index} className='text-sm dark:text-neutral-400 text-neutral-600'>
              {log.author} {log.action} - {log.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskDetailsCard;
