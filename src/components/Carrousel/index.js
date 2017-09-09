import React, { Component } from 'react'

import person from './images/person.jpg'

import './styles.css'

const numOfPeople = 16

class Carrousel extends Component {
  createPeople() {
    return (
      [...Array(numOfPeople)].map((value, i) => (
        <div className="person" key={i}>
          {/* change key from i to value, eventually */}
          <img alt="avatar" className="avatar" src={person} />
        </div>
      ))
    )
  }

  render() {
    return (
      <div className="carrousel">
        <div className="people">
          { this.createPeople() }
        </div>
        <div className="bar">
          <div className="middle-bar" />
        </div>
      </div>
    )
  }
}

export default Carrousel
