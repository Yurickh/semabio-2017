import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavBurger from '../NavBurger'
import { Link } from 'react-scroll'

import semabioLogo from './semabio-logo.svg'

import './styles.css'

class Navbar extends Component {
  variant = () => {
    return this.props.open ? '-open' : ''
  }

  render() {
    return (
      <nav className={ `navbar ${this.variant()}` }>
        <a href="/" className="brand">
          <img
            alt="logo"
            className="logo"
            src={semabioLogo}
          />
          <span className="name">
            Semana da Biologia
          </span>
        </a>
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
          <NavBurger />
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  open: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  open: false
}

export default Navbar
