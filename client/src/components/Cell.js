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

    const { i, j } = this.props
    const { status } = this.state

    const { cellWidth, counterWidth, cellStatus } = Constants

    const x = i * cellWidth + counterWidth
    const y = j * cellWidth + counterWidth

    return (
      <rect key={'' + i + j} x={x} y={y}
            className={'cell ' + cellStatus[status]}
            onClick={(ev) => this.click(ev)}
            onContextMenu={(ev) => this.click(ev)}
      />
    )
  }
}

export default Cell