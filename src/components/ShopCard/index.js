import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Price from '../Price'
import Button from '../Button'

import iconOne from './icon-1.svg'
import iconTwo from './icon-2.svg'
import iconThree from './icon-3.svg'
import iconFour from './icon-4.svg'
import iconFive from './icon-5.svg'

import './styles.css'

const Levels = [
  {
    variant: '-red',
    image: iconOne,
  }, {
    variant: '-orange',
    image: iconTwo,
  }, {
    variant: '-green',
    image: iconThree,
  }, {
    variant: '-blue',
    image: iconFour,
  }, {
    variant: '-purple',
    image: iconFive,
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

        <div className="description">
          {this.props.description.map(phrase => <div key={phrase}>{phrase}</div>)}
        </div>

        {/*<Button color="green"> Comprar </Button>*/}
      </div>
    )
  }
}

ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  level: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
}

ShopCard.defaultProps = {
  description: []
}

export default ShopCard
