import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App