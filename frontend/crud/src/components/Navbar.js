import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nave'>
      <li><NavLink to='/' className={NavLink}>Home</NavLink ></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/signup'>Signup</NavLink></li>
      <li><NavLink to='/hello'>Banking</NavLink></li>
      <li> <NavLink to='/registration'>Registration</NavLink></li>
      <li><NavLink to='/fullstack'>Fullstack</NavLink></li>
      <li>   <NavLink to='/cyber'>Cyber</NavLink></li>
      <li><NavLink to='/program'>Program</NavLink></li>
      <li><NavLink to='/davpos'>Davops</NavLink></li>
    </nav>
  )
}