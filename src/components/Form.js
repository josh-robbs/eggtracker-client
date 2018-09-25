import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Form extends Component {

  state = {
    post: {
      category: '',
      brand: '',
      name: '',
      img: '',
      quantity: '',
      location: ''
    },
    redirect: false
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(
      {...this.state,post:{...this.state.post,[name]: value}}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const body = JSON.stringify(this.state.post)
    
    // fetch('https://eggtrackerapp.herokuapp.com/foodstuff',{
    fetch('http://localhost:8080/foodstuff',{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: body
      })
      .then(res => res.status=201 ? this.setRedirect() : console.log('not working'))
    
    event.target.reset()
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/fridge' />
    }
  }

  render(){
    return (
      <div className='form-container'>
        <form className='form' onSubmit={this.handleSubmit} >
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
        {this.renderRedirect()}
      </div>
    )
  }
}

export default Form;