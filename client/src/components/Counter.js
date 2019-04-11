import React, { Component } from 'react'

import './Counter.scss'

class Counter extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    const { steps, vertical } = this.props

    return (
      <div className={`counter ${vertical ? 'vertical' : ''}`}>
        { steps.map(s => <div>{s}</div>) }
      </div>
    )
  }
}

export default Counter