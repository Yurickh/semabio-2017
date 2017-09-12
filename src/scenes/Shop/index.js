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

        <p className="description"> Escolha o pacote ideal para você! </p>

        <main className="options">
          <ShopCard
            title="Pacote A"
            price={40}
            level={0}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
            ]}
          />
          <ShopCard
            title="Pacote B"
            price={50}
            level={1}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '1 Minicurso',
              'Camiseta',
            ]}
          />
          <ShopCard
            title="Pacote C"
            price={55}
            level={2}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '2 Minicursos',
              'Camiseta',
            ]}
          />
          <ShopCard
            title="Pacote D"
            price={60}
            level={3}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '3 Minicursos',
              'Camiseta',
            ]}
          />
          <ShopCard
            title="Pacote E"
            price={70}
            level={4}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '4 Minicursos',
              'Camiseta',
            ]}
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
          <span className="price">Camiseta avulsa (R$ 25,00)</span>
        </footer>
      </section>
    )
  }
}

export default Shop
