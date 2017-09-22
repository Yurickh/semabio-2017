import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class NavBurger extends Component {
  render() {
    return (
      <div className={ `nav-burger ${this.props.variant}` }
        onClick={this.props.onClick}
      />
    )
  }
}

NavBurger.propTypes = {
  variant: PropTypes.oneOf(['-open', '']),
  onClick: PropTypes.func.isRequired,
}

NavBurger.defaultProps = {
  variant: '',
}

export default NavBurger
