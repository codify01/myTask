import React from 'react'
import { VscServerProcess } from "react-icons/vsc";
import { Link } from 'react-router-dom'

const GroupList = () => {
  return (
    <div className="not-found-page flex items-center justify-center min-h-[92vh] text-center px-4">
    <div className="dark:bg-neutral-900 p-8 rounded-lg shadow-lg max-w-lg">
      <VscServerProcess className="text-6xl mb-4 mx-auto" />
      <h1 className="text-4xl font-bold mb-4">Feature coming soon</h1>
      <p className="text-xl mb-6">Thanks for your patience and understanding</p>
     
    </div>
  </div>
  )
}

export default GroupList