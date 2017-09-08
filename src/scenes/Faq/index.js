import React, { Component } from 'react'
import Title from '../../components/Title'

import dino from './dino.svg'

import './styles.css'

class Faq extends Component {
  render() {
    return (
      <section className="page-faq">
        <Title>Dúvidas Frequentes</Title>
        <p className="description">
          Caso sua dúvida não esteja aqui, entre em contato.
        </p>

        <main className="balloons">
          <div className="balloon ask">
            Minha inscrição na SemaBio me dá direito a que?
          </div>
          <div className="balloon answer">
            Todo mundo! Estudantes de ensino médio, graduação, pós-graduação, professores, pessoas da
             comunidade em geral… Qualquer um que goste de Biologia!
          </div>
        </main>

        <footer>
          <div className="left">
            <span className="-active">
              Quem pode se inscrever na SemaBio
            </span>
            <span>
              Em até quantos minicursos posso me inscrever?
            </span>
            <span>
              Quais as formas de pagamento?
            </span>
            <span>
              Minha inscrição na SemaBio me dá direito a que?
            </span>
            <span>
              Como posso pegar meus certificados?
            </span>
          </div>
          <div className="dino">
            <img
              src={dino}
            />
          </div>
        </footer>
      </section>
    )
  }
}

export default Faq
