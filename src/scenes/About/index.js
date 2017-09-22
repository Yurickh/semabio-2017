import React, { Component } from 'react'
import { Element } from 'react-scroll'

import Title from '../../components/Title'
import Carrousel from '../../components/Carrousel'

import './styles.css'

class About extends Component {
  render() {
    return (
      <Element name="about" className="page-about">
        <Title className="title">
          Sobre O Evento
        </Title>
        <p>
          A Semana da Biologia - SemaBio -  é  um evento criado por estudantes para todos aqueles que
          desejam estudar e conhecer a vida! Esta semana acadêmica será composta por palestras, rodas de
          conversa, minicursos e workshops que prometem mostrar um pouquinho do grande universo que é a
          biologia e instigar a curiosidade de todos aqueles que decidirem se aventurar por esse evento,
          que será transbordado de descobertas e aventuras pelo conhecimento! Lembre-se que todos nós
          podemos explorar os mistérios da vida e ingressar nessa jornada.
        </p>
        <h2 className="title -second">
          Sobre Nós
        </h2>
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
      </Element>
    )
  }
}

export default About
