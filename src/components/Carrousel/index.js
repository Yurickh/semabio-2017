import React, { Component } from 'react'

import person from './images/person.jpg'

import './styles.css'

class Carrousel extends Component {
  state = {
    selected: 8
  }

  people = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

  isSelected = item => item === this.state.selected

  createPeople = () => {
    return (
      this.people.map((value, i) => (
        <div
          style={this.styleFor(i)}
          className={`person ${this.isSelected(i) ? '-centered' : ''}`}
          key={value}
        >
          <img
            alt="avatar"
            src={person}
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
      transform: `translateX(calc(${offset * 240}px - 50%))`
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

  render() {
    return (
      <div className="carrousel">
        <div className="fog-before" onClick={this.moveToPrevious} />
        <div className="people">
          { this.createPeople() }
        </div>
        <div className="bar">
          <div className="middle-bar" />
        </div>
        <div className="fog-after" onClick={this.moveToNext} />
      </div>
    )
  }
}

export default Carrousel
