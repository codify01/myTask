import React from 'react'

const Headline = ({title}) => {
  return (
    <div className="flex items-center w-full mb-8 justify-center pt-3">
    <h1 className="md:basis-1/3 basis-2/3 text-4xl font-bold">{title}</h1>
    <hr className="hidden md:block border border-accent-black dark:border-accent-white rounded-full basis-2/3 opacity-0" />
</div>
  )
}

export default Headline