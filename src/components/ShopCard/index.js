import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Price from '../Price'
import Button from '../Button'

import iconBasic from './icon-basic.svg'
import iconMedium from './icon-medium.svg'
import iconSuper from './icon-super.svg'
import iconUltra from './icon-ultra.svg'

import './styles.css'

const Levels = [
  {
    variant: '-red',
    image: iconBasic,
  }, {
    variant: '-yellow',
    image: iconMedium,
  }, {
    variant: '-green',
    image: iconSuper,
  }, {
    variant: '-blue',
    image: iconUltra,
  }
]

class ShopCard extends Component {
  render() {
    const level = Levels[this.props.level]
    return (
      <div className="shop-card">
        <img className="icon"
          alt=""
          src={level.image}
        />
        <h3 className={`title ${level.variant}`}>
          {this.props.title}
        </h3>

        <div className="price">
          <Price>{this.props.price}</Price>
        </div>

        <p className="description">
          {this.props.description}
        </p>

        <Button color="green"> Comprar </Button>
      </div>
    )
  }
}

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  level: PropTypes.oneOf([0, 1, 2, 3]).isRequired,
  description: PropTypes.string,
}

export default ShopCard
