import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Fridge from './components/Fridge'
import Pantry from './components/Pantry'
import FoodItem from './components/FoodItem'
import Form from './components/Form'
import Update from './components/Update'




class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/fridge' component={Fridge} exact />
            <Route path='/pantry' component={Pantry} exact />
            <Route path='/foodstuff/update/:id' component={Update} />
            <Route path='/foodstuff/:id' component={FoodItem} />
            <Route path='/create' component={Form} exact />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;