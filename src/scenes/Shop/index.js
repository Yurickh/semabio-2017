import React, { Component } from 'react'
import ShopCard from '../../components/ShopCard'

import './styles.css'

class Shop extends Component {
  render() {
    return (
      <section className="page-shop">
        <h2 className="title">Quero me inscrever</h2>
        <p className="description">
          Escolha o pacote ideal para você!
        </p>

        <main className="options">
          <ShopCard
            title="Básico"
            price={19}
            description={`
              Lorem ipsum dolor
              Consectetur adipiscing elit
              Maecenas ante ipsum
              Etiam luctus rhoncus urna
            `}
          />
        </main>
      </section>
    )
  }
}

export default Shop
