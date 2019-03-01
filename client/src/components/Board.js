import React, { Component } from 'react'
import Cell from './Cell'

import './Board.scss'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }

  createBoard = (size) => {
    let board = []
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j ++) {
        board.push(<Cell number={j + i * size} />)
      }
    }
    return board
  }

  render () {
    return (
      <div className="grid">
        {this.createBoard(20)}
      </div>
    )
  }
}

export default Board