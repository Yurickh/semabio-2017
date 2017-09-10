import React, { Component } from 'react'

import ademar from './images/ademar.jpg'
import ana from './images/ana.jpg'
import cibelle from './images/cibelle.jpg'
import dhara from './images/dhara.jpg'
import giovana from './images/giovana.jpg'
import helena from './images/helena.jpg'
import isadora from './images/isadora.jpg'
import joao from './images/joao.jpg'
import leticia from './images/leticia.jpg'
import marcela from './images/marcela.jpg'
import mariana from './images/mariana.jpg'
import patryck from './images/patryck.jpg'
import pedro from './images/pedro.jpg'
import rodrigo from './images/rodrigo.jpg'
import sarah from './images/sarah.jpg'

import './styles.css'

class Carrousel extends Component {
  state = {
    selected: 8
  }

  people = [...Array(16)].map(_ => ({
      name: 'Letícia Campos',
      about: ' ',
      photo: leticia,
    })).concat([{
      name: 'Rodrigo Béllo',
      about: ' ',
      photo: rodrigo,
    }]).concat([{
      name: 'Ademar Dantas Jr.',
      about: ' ',
      photo: ademar,
    }]).concat([{
      name: 'João Antônio Alves',
      about: ' ',
      photo: joao,
    }]).concat([{
      name: 'Pedro Paulo Souza',
      about: ' ',
      photo: pedro,
    }]).concat([{
      name: 'Helena Schuch',
      about: ' ',
      photo: helena,
    }]).concat([{
      name: 'Ana Luísa Gouvêa',
      about: ' ',
      photo: ana,
    }]).concat([{
      name: 'Dhara Reis',
      about: ' ',
      photo: dhara,
    }]).concat([{
      name: 'Sarah Barreto',
      about: ' ',
      photo: sarah,
    }]).concat([{
      name: 'Giovana Frota',
      about: ' ',
      photo: giovana,
    }]).concat([{
      name: 'Cibelle Borges',
      about: ' ',
      photo: cibelle,
    }]).concat([{
      name: 'Mariana Batista',
      about: ' ',
      photo: mariana,
    }]).concat([{
      name: 'Marcela Novaes',
      about: ' ',
      photo: marcela,
    }]).concat([{
      name: 'Isadora Bretas',
      about: ' ',
      photo: isadora,
    }]).concat([{
      name: 'Patryck Dougllas',
      about: ' ',
      photo: patryck,
    }])

  isSelected = item => item === this.state.selected

  renderPeople = () => {
    return (
      this.people.map((person, i) => (
        <div
          style={this.styleFor(i)}
          className={`person ${this.isSelected(i) ? '-centered' : ''}`}
          key={person.name + i}
          onClick={() => this.moveToIndex(i)}
        >
          <img
            alt="avatar"
            src={person.photo}
            className='avatar'
          />
        </div>
      ))
    )
  }

  styleFor = (index) => {
    let offset = index - this.state.selected
    const numOfPeople = this.people.length

    if (offset < -numOfPeople/2) {
      offset += numOfPeople
    } else if (offset > numOfPeople/2) {
      offset -= numOfPeople
    }

    return {
      transform: `translateX(calc(${offset * 180}px - 50%))`
    }
  }

  moveToNext = () => {
    const selected = (this.state.selected + 1) % this.people.length
    this.setState({ selected  })
  }

  moveToPrevious = () => {
    const numOfPeople = this.people.length
    const selected = (this.state.selected - 1) % numOfPeople

    this.setState({
      selected: selected < 0 ? selected + numOfPeople : selected
    })
  }

  moveToIndex = (selected) => {
    this.setState({ selected })
  }

  currentPerson = () => {
    return this.people[this.state.selected]
  }

  render() {
    return (
      <div className="carrousel">
        <div className="fog-before" onClick={this.moveToPrevious} />
        <div className="people">
          { this.renderPeople() }
        </div>
        <div className="bar">
          <div className="middle-bar" />
        </div>
        <div className="info">
          <div className="name">
            {this.currentPerson().name}
          </div>
          <div className="about">
            {this.currentPerson().about}
          </div>
        </div>
        <div className="fog-after" onClick={this.moveToNext} />
      </div>
    )
  }
}

export default Carrousel
