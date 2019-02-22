import React, { Component } from 'react'

import './Hero.css'

class Hero extends Component {

  render () {

    const { data } = this.props

    return (
      <div className={'hero'} key={data.id}>
        <img src={data.thumbnail.path + '.' + data.thumbnail.extension}/>
        <a href={data.urls[0].url}>
          <h4>{data.name}</h4>
        </a>
      </div>
    )
  }
}

export default Hero