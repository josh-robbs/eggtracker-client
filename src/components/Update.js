import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class Update extends Component {

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

  componentDidMount(){
    this.getTheStuff()
    this.parseQueryString()
  }

  getTheStuff = () => {
    fetch(`https://eggtrackerapp.herokuapp.com/foodstuff/${this.parseQueryString()}`)
      .then(res => res.json())
      .then(myData => {
        console.log('data at update',myData.food)
        this.setState(
            {...this.state,post:{...this.state.post,...myData.food[0]}}
          )
      })
  }

  parseQueryString = () => {
    let url = window.location.href
    return url.split('/')[5]
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
    
    fetch(`https://eggtrackerapp.herokuapp.com/foodstuff/${this.parseQueryString()}`,{
      method: 'PUT',
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
            <input type='text' name='category' onChange={this.handleChange} value={this.state.post.category} />
          </div>
          <div className='form-div'>
            <label htmlFor='brand'>Brand:</label>
            <input type='text' name='brand' onChange={this.handleChange} value={this.state.post.brand} />
          </div>
          <div className='form-div'>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' onChange={this.handleChange} value={this.state.post.name} />
          </div>
          <div className='form-div'>
            <label htmlFor='img'>Image: </label>
            <input type='text' name='img' onChange={this.handleChange} value={this.state.post.img} />
          </div>
          <div className='form-div'>
            <label htmlFor='quantity'>Quantity: </label>
            <input type='integer' name='quantity' onChange={this.handleChange} value={this.state.post.quantity} />
          </div>
          <div className='form-div'>
            <label htmlFor='location'>Location: </label>
            <input type='text' name='location' onChange={this.handleChange} value={this.state.post.location} />
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

export default Update;