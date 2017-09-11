import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Title extends Component {
  whiteVariant = () => {
    return this.props.white ? '-white' : ''
  }

  className = () => {
    return this.props.className || ''
  }

  render() {
    return (
      <div className={`simple-title ${this.whiteVariant()} ${this.className()}`}>
        { this.props.children }
        <div className="divisor"></div>
      </div>
    )
  }
}

Title.propTypes = {
  color: PropTypes.bool,
  className: PropTypes.string,
}

export default Title
