import React, { Component } from 'react'
import PropTypes from 'prop-types'

import divisor from './divisor.svg'

import './styles.css'

class Title extends Component {
  render() {
    return (
      <div className="simple-title">
        { this.props.children }
        <img className="divisor"
          src={divisor}
        />
      </div>
    )
  }
}

export default Title
