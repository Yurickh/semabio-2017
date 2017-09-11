import React, { Component } from 'react'
import PropTypes from 'prop-types'

import profilesData from '../../helpers/profilesData'

import './styles.css'

class Carrousel extends Component {

  static propTypes = {
    deterministic: PropTypes.bool,
  }

  getSelected = () => {
    if (this.props.deterministic) {
      return 0
    } else {
      return Math.floor(Math.random() * this.people.length)
    }
  }

  people = profilesData()
  state = {
    selected: this.getSelected()
  }

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
