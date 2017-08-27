import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Button extends Component {
  render() {
    return (
      <button className={`simple-button -${this.props.color}`}>
        { this.props.children }
      </button>
    )
  }
}

Button.propTypes = {
  color: PropTypes.oneOf(['green', 'red', 'outline']),
}

export default Button
