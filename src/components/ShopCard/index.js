import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Price from '../Price'
import Button from '../Button'

import ShopClient from '../../helpers/ShopClient'
import GraphQL from '../../helpers/GraphQL'
import PackageIds from '../../helpers/PackageIds'

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
  buyPackageA = () => {
    const shopClient = ShopClient()

    shopClient.createCheckout()
    .then(checkout => {
      const checkoutId = GraphQL.read(checkout).get('id')
      const lineItems = {
        variantId: PackageIds('A'),
        quantity: 1,
      }

      return shopClient.addLineItems(checkoutId, lineItems)
    })
    .then(checkout => {
      window.location.href = GraphQL.read(checkout).get('webUrl')
    })
  }

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

        {
          product !== 'A'
          ? <Link to={`${root}comprar/${product}`}>
            <Button color="green"> Comprar </Button>
          </Link>
          : <a><Button color="green" onClick={this.buyPackageA}> Comprar </Button></a>
        }


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
