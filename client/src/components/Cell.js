import React, { Component } from 'react'
import { Constants } from '../common/constants'

import './Cell.scss'

class Cell extends Component {

  constructor (props) {
    super(props)
    this.state = {
      status: 0
    }
  }

  click (ev) {
    ev.preventDefault()
    let newStatus = ev.button === 0 ? 1 : 3
    this.setState({ status: newStatus })
  }

  render () {

    const { number } = this.props
    const { status } = this.state

    return (
      <div key={number} className={`cell ${Constants.cellStatus[status]}`}
           onClick={(ev) => this.click(ev)}
           onContextMenu={(ev) => this.click(ev)}
      />
    )
  }
}

export default Cell