import React, { Component } from 'react'

import './Cell.scss'

class Cell extends Component {

  statuses = ['empty', 'ok', 'ko', 'mark']

  constructor (props) {
    super(props)
    this.state = {
      status: Math.random() * 4 >> 0
    }
  }

  render () {

    const { number } = this.props
    const { status } = this.state

    return (
      <div className={`cell ${this.statuses[status]}`} key={number}/>
    )
  }
}

export default Cell