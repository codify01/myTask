import React from 'react'
import { Link } from 'react-router-dom'

const BtnTwo = ({style, name, path}) => {
  return (
    <Link to={`/${path}`} className={`py-3 px-4 rounded font-medium ${style}`}>{name}</Link>
  )
}

export default BtnTwo