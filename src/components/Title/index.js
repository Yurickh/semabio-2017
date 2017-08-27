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
          alt="divisor"
          src={divisor}
        />
      </div>
    )
  }
}

Title.propTypes = {
  color: PropTypes.string,
}

export default Title
