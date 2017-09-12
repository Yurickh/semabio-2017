import React, { Component } from 'react'
import Title from '../../components/Title'

import questionsData from '../../helpers/questionsData'

import dino from './dino.svg'

import './styles.css'

class Faq extends Component {
  data = questionsData()
  state = {
    selected: 0,
  }

  selectQuestion = (index) => {
    this.setState({
      selected: index
    })
  }

  render() {
    return (
      <section className="page-faq">
        <Title>Dúvidas Frequentes</Title>

        <p className="description">
          Caso sua dúvida não esteja aqui, entre em contato conosco.
        </p>

        <main className="balloons">
          <div className="balloon question">
            Minha inscrição na SemaBio me dá direito a que?
          </div>
          <div className="balloon answer">
            Todo mundo! Estudantes de ensino médio, graduação, pós-graduação, professores, pessoas da
             comunidade em geral… Qualquer um que goste de Biologia!
          </div>
        </main>

        <aside>
          <div className="left">
            {
              this.data.map((datum, index) => {
                return (
                   <span
                     key={datum.question}
                     className={index === this.state.selected ? '-active' : ''}
                     onClick={() => this.selectQuestion(index)}
                    >
                      {datum.question}
                    </span>
                )
              })
            }
          </div>
          <div className="dino">
            <img
              src={dino}
              alt="philosoraptor"
            />
          </div>
        </aside>
      </section>
    )
  }
}

export default Faq
