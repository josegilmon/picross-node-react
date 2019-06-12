import React, { Component } from 'react'
import Cell from './Cell'
import Counter from './Counter'

import './Board.scss'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }

  createBoard = (size) => {

    const nonogram = '00100 01010 01110 01010 01010'.split(' ')
    const rowCounters = nonogram.map(r => r.split('0').filter(s => !!s).map(s => s.length))
    const columnCounters = [[0], [4], [1, 1], [4], [0]]

    size = nonogram.length

    let board = []
    for (let i = 0; i <= size; i++) {
      for (let j = 0; j <= size; j++) {
        const key = `${i}${j}`
        if (i === 0) {
          board.push(j ? <Counter pos={j} steps={columnCounters[j - 1]} /> : <text>-</text>)
        } else {
          board.push(j ? <Cell i={i} j={j}/> : <Counter pos={i} steps={rowCounters[i - 1]} vertical='true' />)
        }
      }
    }
    return board
  }

  render () {
    return (
      <div className="grid">
        <svg version="1.1"
             baseProfile="full"
             width="360" height="360"
             xmlns="http://www.w3.org/2000/svg">
          {this.createBoard(20)}
        </svg>
      </div>
    )
  }
}

export default Board