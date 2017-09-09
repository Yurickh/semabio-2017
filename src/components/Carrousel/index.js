import React, { Component } from 'react'

import person from './images/person.jpg'

import './styles.css'

const numOfPeople = 16

class Carrousel extends Component {
  state = {
    selected: 8
  }

  isSelected = item => item === this.state.selected

  createPeople = () => {
    return (
      [...Array(numOfPeople)].map((value, i) => (
        <div
          style={this.styleFor(i)}
          className={`person ${this.isSelected(i) ? '-centered' : ''}`}
          key={i}
        >
          {/* change key from i to value, eventually */}
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

    if (offset < -numOfPeople/2) {
      offset += numOfPeople
    } else if (offset > numOfPeople/2) {
      offset -= numOfPeople
    }

    return {
      transform: `translateX(${offset * 240}px)`
    }
  }

  moveToNext = () => {
    const selected = (this.state.selected + 1) % numOfPeople
    this.setState({ selected  })
  }

  moveToPrevious = () => {
    const selected = (this.state.selected - 1) % numOfPeople

    this.setState({
      selected: selected < 0 ? numOfPeople : selected
    })
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
        <button onClick={this.moveToNext}>CLICKME</button>
      </div>
    )
  }
}

export default Carrousel
