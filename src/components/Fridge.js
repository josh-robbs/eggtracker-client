import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import FoodItemCard from './FoodItemCard';

class Fridge extends Component {
  
  render() {
    return (
      <div>
      <Header />
      <h2>This is the Fridge Component</h2>
      <FoodItemCard />
      <Footer />
      </div>
    );
  }
}

export default Fridge;