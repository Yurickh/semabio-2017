import React, { Component } from 'react'
import Title from '../../components/Title'

import './styles.css'

class PlacesToStay extends Component {
  render() {
    return (
      <section className="page-placestostay">
        <Title>Onde Ficar?</Title>

        <h2 className="subtitle">Selecionamos alguns lugares baratinhos e próximos ao evento :)</h2>

        <main className="content">
          <div className="left">
            <div className="place">
              <h1 className="name">Brasília Living Hotel</h1>
              <p className="address">SCRN 714/15, Bloco D, Entrada 38 - Asa Norte, Brasília - DF, 70761-640</p>
              <span className="phone">(61) 3297-4421</span>
            </div>
            <div className="place">
              <h1 className="name">Brasília Boutique House</h1>
              <p className="address">SHN, Quadra 01, Bloco F, Ed. VISION&FUSION - Asa Norte, Brasília - DF, 70701-000</p>
              <span className="phone">(61) 3532-0938</span>
            </div>
          </div>

          <div className="bar" />

          <div className="right">
            <div className="place">
              <h1 className="name">Hostel 7 Brasília</h1>
              <p className="address">SCLRN 708 Bloco I, Loja 20 - Asa Norte, Brasília - DF, 70740-559</p>
              <span className="phone">(61) 3033-7707</span>
            </div>
          </div>
        </main>
      </section>
    )
  }
}

export default PlacesToStay
