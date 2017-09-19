import React, { Component } from 'react'

import semabioLogo from './semabio-logo.svg'

import './styles.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="brand">
          <img className="logo" alt="logo" src={semabioLogo} />
          <span className="name">
            Semana da Biologia
          </span>
        </div>
        <div className="social">
          <a className="icon -facebook"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/SemaBio/"
          >
          </a>
          <a className="icon -instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/semabiounb/"
          >
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
