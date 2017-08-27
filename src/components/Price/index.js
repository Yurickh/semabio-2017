import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class Price extends Component {
  render() {
    const integer = Math.trunc(this.props.children)
    const decimal = Math.round((this.props.children - integer) * 100)

    return (
      <div className="price-box">
        <span className="currency">R$</span>
        <span className="integer">{integer}</span>
        <span className="decimal">,{('0000' + decimal).slice(-2)}</span>
      </div>
    )
  }
}

Price.propTypes = {
  children: PropTypes.number,
}

export default Price
