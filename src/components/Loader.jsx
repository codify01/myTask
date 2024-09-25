import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="relative flex space-x-2">
      <div className="absolute inset-0 w-24 h-24 border-4 border-t-pry border-neutral-200 rounded-full animate-spin"></div>

      <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade"></div>

      <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade animation-delay-200"></div>

      <div className="w-5 h-5 bg-pry rounded-full animate-bounceAndFade animation-delay-400"></div>
    </div>
  </div>
  )
}

export default Loader