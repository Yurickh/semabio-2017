import React, { Component } from 'react'

// import iconFacebook from './facebook.svg'
// import iconInstagram from './instagram.svg'
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
      </nav>
    )
  }
}

export default Navbar
