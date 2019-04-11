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
    const columnCounters = [[0],[4],[1, 1],[4],[0]]

    size = nonogram.length

    let board = []
    for (let i = 0; i <= size; i++) {
      for (let j = 0; j <= size; j++) {
        if (i === 0) {
          board.push(j ? <Counter steps={columnCounters[j - 1]} vertical='true'/> : <div/>)
        } else {
          board.push(j ? <Cell number={j + i * size}/> : <Counter steps={rowCounters[i - 1]}/>)
        }
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