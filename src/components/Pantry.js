import React, { Component } from 'react'
import FoodItemCard from './FoodItemCard'

class Pantry extends Component {
  
  render() {
    return (
      <div>
        <h2>This is the Pantry Component</h2>
        <FoodItemCard />
      </div>
    );
  }
}

export default Pantry