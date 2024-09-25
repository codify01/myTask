import React, { useEffect } from 'react'
import TaskDetails from '../../../components/TaskDetails'
import RightBar from '../../../components/Rightbar'
import LeftBar from '../../../components/Leftbar'
import PageTitle from '../../../utilities/PageTitle'
import axios from 'axios'

const UserDashboard = () => {
  useEffect(() => {
    const fetchSession = async () => {
      const token = localStorage.getItem('token')
      const options = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
      try {
        if (!token) {
          console.log('no active session')
          return
        } 
        const data = await axios.get('https://apitask.sunmence.com.ng/session.php', options)
        if (data) {
          console.log(data.data.user);
          localStorage.setItem('user', JSON.stringify(data.data.user))
        } else {
          'no user'
        }

      } catch (err) {
        // setError("Failed to fetch session data");
      } finally {
        // setLoading(false);
      }
    };

    fetchSession();
  }, []);
  return (
    <>
        <PageTitle title={'User Dashboard'}/>
        <TaskDetails/>
       
    </>
  )
}

export default UserDashboard