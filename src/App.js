import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Fridge from './components/Fridge'
import Pantry from './components/Pantry'
import FoodItem from './components/FoodItem'
import AddFoodItem from './components/AddFoodItem';




class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/fridge' component={Fridge} exact />
            <Route path='/pantry' component={Pantry} exact />
            <Route path='/foodstuff/:id' component={FoodItem} />
            <Route path='/create' component={AddFoodItem} exact />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;