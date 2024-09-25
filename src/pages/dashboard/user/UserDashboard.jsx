import React, { useEffect } from 'react'
import TaskDetails from '../../../components/TaskDetails'
import RightBar from '../../../components/Rightbar'
import LeftBar from '../../../components/Leftbar'
import PageTitle from '../../../utilities/PageTitle'
import axios from 'axios'

const UserDashboard = () => {
  return (
    <>
        <PageTitle title={'User Dashboard'}/>
        <TaskDetails/>
       
    </>
  )
}

export default UserDashboard