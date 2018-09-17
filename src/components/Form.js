import React, { Component } from 'react';


class Form extends Component {

  state = {
    category: '',
    brand: '',
    name: '',
    img: '',
    quantity: '',
    location: ''
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit is firing')
    const body = JSON.stringify(this.state)
    
    fetch('https://eggtrackerapp.herokuapp.com/foodstuff',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: body
    })
    
    event.target.reset()
  }

  render(){
    return (
      <div className='form-container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='form-div'>
            <label htmlFor='category'>Category:</label>
            <input type='text' name='category' onChange={this.handleChange} />
          </div>
          <div className='form-div'>
            <label htmlFor='brand'>Brand:</label>
            <input type='text' name='brand' onChange={this.handleChange} />
          </div>
          <div className='form-div'>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' onChange={this.handleChange} />
          </div>
          <div className='form-div'>
            <label htmlFor='img'>Image: </label>
            <input type='text' name='img' onChange={this.handleChange} />
          </div>
          <div className='form-div'>
            <label htmlFor='quantity'>Quantity: </label>
            <input type='integer' name='quantity' onChange={this.handleChange} />
          </div>
          <div className='form-div'>
            <label htmlFor='location'>Location: </label>
            <input type='text' name='location' onChange={this.handleChange} />
          </div>
          <div className='form-button'>
            <input type='submit' name='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default Form;