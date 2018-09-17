import React from 'react';


const Footer = (props) => {
  console.log('props at card', props.food)

  let dateAdded = props.food.last_added.slice(0,10)
  let timeAdded = props.food.last_added.slice(11,19)
  let dateUpdated = props.food.time_updated.slice(0,10)
  let timeUpdated = props.food.time_updated.slice(11,19)
  let quantity = props.food.quantity > 1 ? props.food.quantity : (props.food.quantity * 100) + '%'

  console.log('timeadded', timeAdded)


  return (
    <div className="card food-card">
      <img src={props.food.img} alt="Avatar" />
      <div className="food-container">
        <p><b>{props.food.name}</b></p>
        <p>{quantity}</p>
        <p>{dateAdded} {timeAdded}</p>
        <p><sm><em>{dateUpdated} {timeUpdated}</em></sm></p>
      </div>
    </div> 
  )
}

export default Footer;