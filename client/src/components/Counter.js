import React, { Component } from 'react'

import './Counter.scss'
import { Constants } from '../common/constants'

class Counter extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    const { pos, steps, vertical } = this.props

    const { cellWidth, counterWidth } = Constants

    return (
      <g key={pos}>
        { steps.map((s, i, a) => {
          const l = a.length - 1
          const xFactor = vertical ? l - i : -pos
          const yFactor = vertical ? -pos : l - i
          const x = counterWidth - xFactor * cellWidth
          const y = counterWidth - yFactor * cellWidth
          return (<text key={i} x={x + 10} y={y + 10} className={vertical ? 'vertical' : ''}>{s}</text>)
        }) }
      </g>
    )
  }
}

export default Counter