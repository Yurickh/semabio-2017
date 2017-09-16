import React, { Component } from 'react'

import { Element } from 'react-scroll'

import ShopCard from '../../components/ShopCard'
import Title from '../../components/Title'

import './styles.css'

class Shop extends Component {
  render() {
    return (
      <section className="page-shop">
        <Element name="shop">
          <Title>Quero me inscrever</Title>
        </Element>

        <p className="subtitle"> Escolha o pacote ideal para você! </p>

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
          {/* <Button color='outline'>
            <img
              className="icon"
              alt='icone de camiseta'
              src={iconShirt}
            />
            <div className="text">
              Quero apenas a camiseta
            </div>
          </Button> */}
          <span className="price">A camiseta avulsa estará disponível por R$ 25,00</span>
        </footer>
      </section>
    )
  }
}

export default Shop
