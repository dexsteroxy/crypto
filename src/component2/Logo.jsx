import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

const Logo = () => {
  return (
   <Link to="/view"
   
   className=' '>
    <img src={logo} alt=''/>
   </Link>
  )
}

export default Logo