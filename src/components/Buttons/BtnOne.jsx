import React from 'react'

const BtnOne = ({name, icons, style}) => {
  return (
    <button className={`py-2 px-4 border rounded text-sm flex items-center justify-center gap-2 transition-all duration-300 ${style}`}><span>{name}</span>{icons}</button>
  )
}

export default BtnOne