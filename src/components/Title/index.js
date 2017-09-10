import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Title extends Component {
  render() {
    return (
      <div className={`simple-title -${this.props.color}`}>
        { this.props.children }
        <div className="divisor"></div>
      </div>
    )
  }
}
Title.propTypes = {
  color: PropTypes.oneOf(['white'])
}

Title.defaultProps = {
  color: ''
}

export default Title
