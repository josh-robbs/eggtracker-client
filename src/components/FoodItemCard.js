import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class FoodItemCard extends Component {

  render() {
    let dateAdded = this.props.food.last_added.slice(0,10)
    let timeAdded = this.props.food.last_added.slice(11,19)
    let dateUpdated = this.props.food.time_updated.slice(0,10)
    let timeUpdated = this.props.food.time_updated.slice(11,19)
    let quantity = this.props.food.quantity > 1 ? this.props.food.quantity : (this.props.food.quantity * 100) + '%'
    return (
      <div className='card food-card'>
        <img src={this.props.food.img} alt={'image of ' + this.props.food.name} id={this.props.food.id} />
        <div className='food-container'>
          <p><b>{this.props.food.name}</b></p>
          <p>{quantity}</p>
          <p>{dateAdded} {timeAdded}</p>
          <p><em>{dateUpdated} {timeUpdated}</em></p>
          <div className='card-button-container'>
            <NavLink to={'/foodstuff/update/' + this.props.food.id} className='add-button-container'>
              <button className='card-button update'>Update</button>
            </NavLink>
            <button id={this.props.food.id} className='card-button delete' onClick={this.props.delete}>Delete</button>
          </div>
        </div>
      </div> 
    )
  }
}

export default FoodItemCard;