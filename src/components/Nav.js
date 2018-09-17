import React from 'react'
import { NavLink } from 'react-router-dom'



const Nav = (props) => {
  return (
    <nav className='nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>Logout</NavLink>
    </nav>
  )
}

export default Nav;