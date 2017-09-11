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
          Caros amigos, a execução dos pontos do programa agrega valor ao estabelecimento do investimento em
           reciclagem técnica. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a
           revolução dos costumes talvez venha a ressaltar a relatividade dos índices pretendidos. Assim
           mesmo, o entendimento das metas propostas faz parte de um processo de gerenciamento do processo
           de comunicação como um todo. Todavia, a estrutura atual da organização ainda não demonstrou
           convincentemente que vai participar na mudança de todos os recursos funcionais envolvidos.
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
