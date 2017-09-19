import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Price from '../Price'

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
    const { root, product, description, price } = this.props

    return (
      <div className="shop-card">
        <img className="icon"
          alt=""
          src={level.image}
        />
        <h3 className={`title ${level.variant}`}>
          Pacote {product}
        </h3>

        <div className="price">
          <Price>{price}</Price>
        </div>

        <div className="description">
          {description.map(phrase => <div key={phrase}>{phrase}</div>)}
        </div>

        <Link to={`${root}comprar/${product}`}>
          <Button color="green"> Comprar </Button>
        </Link>
      </div>
    )
  }
}

ShopCard.propTypes = {
  product: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E']).isRequired,
  price: PropTypes.number.isRequired,
  level: PropTypes.oneOf([0, 1, 2, 3, 4]).isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
  root: PropTypes.string.isRequired,
}

ShopCard.defaultProps = {
  description: []
}

export default ShopCard
