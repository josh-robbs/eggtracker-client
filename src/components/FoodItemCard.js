import React from 'react';
import { NavLink } from 'react-router-dom'


const Footer = (props) => {

  let dateAdded = props.food.last_added.slice(0,10)
  let timeAdded = props.food.last_added.slice(11,19)
  let dateUpdated = props.food.time_updated.slice(0,10)
  let timeUpdated = props.food.time_updated.slice(11,19)
  let quantity = props.food.quantity > 1 ? props.food.quantity : (props.food.quantity * 100) + '%'



  return (
    <div className='card food-card'>
      <img src={props.food.img} alt={'image of ' + props.food.name} />
      <div className='food-container'>
        <p><b>{props.food.name}</b></p>
        <p>{quantity}</p>
        <p>{dateAdded} {timeAdded}</p>
        <p><em>{dateUpdated} {timeUpdated}</em></p>
        <div className='card-button-container'>
          <NavLink to={'/foodstuff/update/' + props.food.id} className='add-button-container'>
            <button className='card-button update'>Update</button>
          </NavLink>
          <button id={props.food.id} className='card-button delete' onClick={props.delete}>Delete</button>
        </div>
      </div>
    </div> 
  )
}

export default Footer;