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
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
          </div>

          <div className="bar" />

          <div className="right">
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
            <div className="place">
              <h1 className="name">Pousada Damasco</h1>
              <span className="phone">(61) 98200-1879</span>
            </div>
          </div>
        </main>
      </section>
    )
  }
}

export default PlacesToStay
