import React, { Component } from 'react'

import Title from '../../components/Title'
import Balloon from '../../components/Balloon'

import questionsData from '../../helpers/questionsData'

import dino from './dino.png'

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

  question = () => {
    return this.data[this.state.selected].question
  }

  answer = () => {
    return this.data[this.state.selected].answer
  }

  render() {
    return (
      <section className="page-faq">
        <Title>Dúvidas Frequentes</Title>

        <p className="subtitle">
          Caso sua dúvida não esteja aqui, entre em contato conosco.
        </p>

        <main className="balloons">
          <Balloon type="question" key={this.question()}>
            {this.question()}
          </Balloon>
          <Balloon type="answer">
            {this.answer()}
          </Balloon>
        </main>

        <aside>
          <div className="divisor">
            <div className="ball" style={{
              top: `${58 + this.state.selected * 48}px`
            }}/>
          </div>
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
