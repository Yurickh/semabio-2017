import React, { Component } from 'react'

import people from './people.jpg'

import './styles.css'

class Carrousel extends Component {
  render() {
    return (
      <div className="carrousel">
        <div className="peoples">
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people -centered">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
          <div className="people">
            <img className="avatar" src={people} />
          </div>
        </div>
        <div className="bar">
          <div className="middle-bar"></div>
        </div>
      </div>
    )
  }
}

export default Carrousel
