import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Button extends Component {
  render() {
    return (
      <button className={`simple-button -${this.props.color}`} onClick={this.props.onClick}>
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
