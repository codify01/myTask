import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TaskPage from './pages/dashboard/user/Taskpage'
import UserDashboard from './pages/dashboard/user/UserDashboard'

const App = () => {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/user' element={<UserDashboard/>}/>  
        <Route path='/task' element={<TaskPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App