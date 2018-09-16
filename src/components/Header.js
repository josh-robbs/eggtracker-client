import React, { Component } from 'react';
import Nav from './Nav'

const Header = (props) => {
  return (
    <header>
      <Nav />
      <h1>eggtracker</h1>
    </header>
  )
}

export default Header;