import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Button extends Component {
  render() {
    return (
      <button {...this.props} className={`simple-button -${this.props.color} ${this.props.className}`}>
        { this.props.children }
      </button>
    )
  }
}

Button.propTypes = {
  color: PropTypes.oneOf(['green', 'red', 'outline']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: 'red',
  onClick: _=>_,
}

export default Button
