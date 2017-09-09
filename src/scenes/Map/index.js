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
            <div className="line">167.2 - Núcleo Bandeirante</div>
            <div className="line">521 - Sobradinho</div>
            <div className="line">517 - Sobradinho II</div>
            <div className="line">167.2 - Núcleo Bandeirante</div>
            <div className="line">521 - Sobradinho</div>
            <div className="line">517 - Núcleo Bandeirante</div>
            <Button color="green">Mais Linhas</Button>
          </aside>
        </div>
      </section>
    )
  }
}

export default Map
