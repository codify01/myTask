import React from 'react'
import TaskDetails from '../../../components/TaskDetails'
import RightBar from '../../../components/Rightbar'
import LeftBar from '../../../components/Leftbar'

const UserDashboard = () => {
  return (
    <div className='sContain flex justify-center md:h-[93vh] md:overflow-hidden'>
        <LeftBar/>
        <TaskDetails/>
        <RightBar/>
       
    </div>
  )
}

export default UserDashboard