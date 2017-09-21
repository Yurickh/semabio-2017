import React, { Component } from 'react'

import Title from '../../components/Title'
import Button from '../../components/Button'
import GoogleMap from '../../components/GoogleMap'

import './styles.css'

class Map extends Component {
  render() {
    return (
      <section className="page-map">
        <Title>Como chegar</Title>

        <h2 className="subtitle">Selecionamos algumas das principais linhas de ônibus para você</h2>

        <div className="content">
          <main className="map-container">
            <GoogleMap
              lat={-15.7630982}
              lng={-47.872239}
              zoom={14}
            />
          </main>

          <aside className="bus-lines">
            <div className="line">110 - Rod. do Plano Piloto</div>
            <div className="line">167 - Guará</div>
            <div className="line">349 - Taguatinga</div>
            <div className="line">521 - Sobradinho</div>
            <div className="line">605 - Planaltina</div>
            <div className="line">160.2 - Núcleo Bandeirante</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.sistemas.dftrans.df.gov.br/horarios/"
            >
              <Button color="green">Mais Linhas</Button>
            </a>
            <h3 className="observation">O evento vai rolar na Universidade de Brasília - Instituto de Ciências Biológicas</h3>
          </aside>
        </div>
      </section>
    )
  }
}

export default Map
