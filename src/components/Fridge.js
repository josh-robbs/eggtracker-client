import React, { Component } from 'react';
import FoodItemCard from './FoodItemCard';

class Fridge extends Component {

  state = {
    foodStuff: []
  }
  
  componentDidMount() {
    this.getTheStuff()
  }
  
  getTheStuff = () => {
    fetch('https://eggtrackerapp.herokuapp.com/foodstuff')
      .then(res => res.json())
      .then(myData => {
        this.setState({foodStuff: myData.food})
      })
  }

  render() {
    console.log(this.state.foodStuff)
    
    const foodList = this.state.foodStuff.map(food => {
      return <FoodItemCard food={food} key={food.id}/> 
    })

    return (
      <div>
        {foodList}
        <div className="card food-card">
          <h1>Add Item</h1>
        </div> 
      </div>
    )
  }
}

export default Fridge;