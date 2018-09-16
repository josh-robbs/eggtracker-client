import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <NavLink to='/fridge'>Refrigerator</NavLink>
        <NavLink to='/pantry'>Pantry</NavLink>
      </div>
    );
  }
}

export default Home;