import React, { Component } from 'react'
import ShopCard from '../../components/ShopCard'
import Title from '../../components/Title'
import Button from '../../components/Button'

import iconShirt from './shirt.svg'

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
            level={0}
            description={`
              Lorem ipsum dolor
              Consectetur adipiscing elit
              Maecenas ante ipsum
              Etiam luctus rhoncus urna
            `}
          />
          <ShopCard
            title="Médio"
            price={39}
            level={1}
            description={`
              Lorem ipsum dolor
              Consectetur adipiscing elit
              Maecenas ante ipsum
              Etiam luctus rhoncus urna
            `}
          />
          <ShopCard
            title="Super"
            price={99}
            level={2}
            description={`
              Lorem ipsum dolor
              Consectetur adipiscing elit
              Maecenas ante ipsum
              Etiam luctus rhoncus urna
            `}
          />
          <ShopCard
            title="Ultra"
            price={99.99}
            level={3}
            description={`
              Lorem ipsum dolor
              Consectetur adipiscing elit
              Maecenas ante ipsum
              Etiam luctus rhoncus urna
            `}
          />
        </main>

        <footer className="shirt">
          <Button color='outline'>
            <img
              className="icon"
              alt='icone de camiseta'
              src={iconShirt}
            />
            <div className="text">
              Quero apenas a camiseta
            </div>
          </Button>
        </footer>
      </section>
    )
  }
}

export default Shop
