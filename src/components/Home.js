import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
      <Header />
      <NavLink to='/fridge'>Refrigerator</NavLink>
      <NavLink to='/pantry'>Pantry</NavLink>
      <Footer />
      </div>
    );
  }
}

export default Home;