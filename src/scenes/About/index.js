import React, { Component } from 'react'
import Title from '../../components/Title'
import Carrousel from '../../components/Carrousel'

import './styles.css'

class About extends Component {
  render() {
    return (
      <section className="page-about">
        <Title className="title">
          Sobre Nós
        </Title>
        <p>
          Nós, da XVI Comissão Organizadora, queremos contribuir para uma ampla e acessível divulgação
           científica e para uma maior valorização pela Biologia. Somos uma equipe de estudantes motivados
           principalmente a guiar pessoas pelo imenso universo que o estudo da Biologia e suas áreas afins
           apresentam! Esperamos que nosso público experimente novos conhecimentos e se aventure pela
           diversidade de oportunidades tanto no contexto da universidade quanto para muito além deste.
        </p>
        <h2 className="title">
          Conheça nossa equipe
        </h2>
        <Carrousel />
      </section>
    )
  }
}

export default About
