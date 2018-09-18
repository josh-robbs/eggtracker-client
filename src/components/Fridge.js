import React, { Component } from 'react'
import FoodItemCard from './FoodItemCard'
import { NavLink } from 'react-router-dom'


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

  deleteFoodItem = (event) => {
    const foodId = event.target.id
    fetch(`https://eggtrackerapp.herokuapp.com/foodstuff/${foodId}`, {
      method: 'DELETE'
    })
    .then(this.getTheStuff())
  }

  render() {
    console.log(this.state.foodStuff)
    
    const foodList = this.state.foodStuff.map(food => {
      return <FoodItemCard food={food} key={food.id} delete={this.deleteFoodItem} /> 
    })

    return (
      <div>
        {foodList}
        <NavLink to='/create' className='add-button-container'>
          <div className='card food-card add-button'>
            <h1>Add Item</h1>
            <div className='highlight-div'></div>
          </div>         
        </NavLink>
      </div>
    )
  }
}

export default Fridge;

