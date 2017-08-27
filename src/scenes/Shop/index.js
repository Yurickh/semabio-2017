import React, { Component } from 'react'
import ShopCard from '../../components/ShopCard'
import Title from '../../components/Title'

import './styles.css'

class Shop extends Component {
  render() {
    return (
      <section className="page-shop">
        <Title>Quero me inscrever</Title>
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
