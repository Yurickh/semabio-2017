import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ShopCard from '../../components/ShopCard'
import Title from '../../components/Title'
import Button from '../../components/Button'

import iconShirt from './shirt.svg'

import './styles.css'

class Shop extends Component {
  render() {
    const { url } = this.props.match

    return (
      <section className="page-shop">
        <Title>Quero me inscrever</Title>

        <p className="description"> Escolha o pacote ideal para você! </p>

        <main className="options">
          <ShopCard
            product="A"
            price={40}
            level={0}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
            ]}
          />
          <ShopCard
            product="B"
            price={50}
            level={1}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '1 Minicurso',
              'Camiseta',
            ]}
          />
          <ShopCard
            product="C"
            price={55}
            level={2}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '2 Minicursos',
              'Camiseta',
            ]}
          />
          <ShopCard
            product="D"
            price={60}
            level={3}
            root={url}
            description={[
              'Ciclo de Palestras',
              'Coffee Break',
              'Kit Semabio',
              '3 Minicursos',
              'Camiseta',
            ]}
          />
          <ShopCard
            product="E"
            price={70}
            level={4}
            root={url}
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
          <Link to={`${url}comprar/camiseta`}>
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
          </Link>
          <span className="price">Camiseta avulsa (R$ 25,00)</span>
        </footer>
      </section>
    )
  }
}

export default Shop
