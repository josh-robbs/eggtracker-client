import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class AddFoodItem extends Component {
  
  render() {
    return (
      <div className="Home">
      <Header />
        <h2>Add Food Form</h2>
      <Footer />
      </div>
    );
  }
}

export default AddFoodItem;