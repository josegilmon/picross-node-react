import React, { Component } from 'react'

import './Home.css'
import logo from '../logo.svg'
import Hero from '../components/Hero'
import Board from '../components/Board'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  componentDidMount () {
    /*
    fetch('/api/search').then((res) => {
      res.json().then((response) => this.setState({ heroes: response.data.results }))
    })
    */
  }

  render () {
    const { heroes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          {/*
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          */}
        </header>
        <div className="results">
          {/*heroes.map(hero => <Hero data={hero}/>)*/}
          <Board/>
        </div>
      </div>
    )
  }
}

export default Home
