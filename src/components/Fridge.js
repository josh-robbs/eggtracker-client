import React, { Component } from 'react';
import FoodItemCard from './FoodItemCard';

class Fridge extends Component {
  
  render() {
    return (
      <div>
      <h2>This is the Fridge Component</h2>
      <FoodItemCard />
      </div>
    );
  }
}

export default Fridge;