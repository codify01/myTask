import React from 'react'

const Headline = ({title}) => {
  return (
    <div className="flex items-center w-full mb-8 justify-center pt-3">
<<<<<<< HEAD
    <h1 className="basis-2/3 text-4xl font-bold capitalize">{title}</h1>
=======
    <h1 className="basis-2/3 text-4xl font-bold">{title}</h1>
>>>>>>> acaf3b47e49bafb787bf430329849b2cf9a974bc
    <hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3 opacity-0" />
</div>
  )
}

export default Headline