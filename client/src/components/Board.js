import React, { Component } from 'react'
import Cell from './Cell'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }

  render () {
    return (
      <div>
        <Cell number="1"/>
        <Cell number="2"/>
        <Cell number="3"/>
        <Cell number="4"/>
      </div>

    )
  }
}

export default Board