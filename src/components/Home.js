import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className='home-container'>
        <NavLink to='/fridge'>
          <div className='card fridge'></div>
        </NavLink>
        <NavLink to='/pantry'>
          <div className='card pantry'></div>
        </NavLink>
      </div>
    )
  }
}

export default Home