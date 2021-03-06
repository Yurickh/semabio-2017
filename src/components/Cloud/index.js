import React, { Component } from 'react'

import cloud1x from './cloud@1x.png'
import cloud2x from './cloud@2x.png'

import './styles.css'

class Cloud extends Component {
  render() {
    return (
      <img className="cloud"
        alt=""
        srcSet={
          `${cloud1x} 1x,
           ${cloud2x} 2x`
        }
        src={cloud1x}
      />
    )
  }
}

export default Cloud
