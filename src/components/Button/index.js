import React, { Component } from 'react'
import { PulseLoader } from 'halogen'
import PropTypes from 'prop-types'

import './styles.css'

class Button extends Component {
  loadingButton = () => {
    return this.props.loading ? '-loading' : ''
  }

  click = (e) => {
    if (this.props.loading) {
      e.preventDefault()
      return
    }

    return this.props.onClick()
  }

  render() {
    return (
      <button
        onClick={this.click}
        style={{
          cursor: this.props.loading ? 'auto' : 'pointer'
        }}
        className={`simple-button -${this.props.color} ${this.loadingButton()} ${this.props.className}`}
      >
        { this.props.loading
          ? <PulseLoader size=".5em" />
          : this.props.children }
      </button>
    )
  }
}

Button.propTypes = {
  color: PropTypes.oneOf(['green', 'red', 'outline']),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  color: 'red',
  onClick: _=>_,
  loading: false,
}

export default Button
