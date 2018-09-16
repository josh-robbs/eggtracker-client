import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import FoodItemCard from './FoodItemCard';

class Pantry extends Component {
  
  render() {
    return (
      <div>
      <Header />
      <h2>This is the Pantry Component</h2>
      <FoodItemCard />
      <Footer />
      </div>
    );
  }
}

export default Pantry;