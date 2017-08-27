import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Price from '../Price'

import iconBasic from './icon-basic.svg'

import './styles.css'

class ShopCard extends Component {
  render() {
    return (
      <div className="shop-card">
        <img className="icon"
          alt=""
          src={iconBasic}
        />
        <h3 className="title">
          {this.props.title}
        </h3>

        <Price>{this.props.price}</Price>
      </div>
    )
  }
}

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
}

export default ShopCard
