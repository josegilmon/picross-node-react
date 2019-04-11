import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import Home from './pages/Home'
import List from './pages/List'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
  }
}

export default App
