import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavBurger from '../NavBurger'
// import { Link } from 'react-scroll'

// import iconFacebook from './facebook.svg'
// import iconInstagram from './instagram.svg'
import semabioLogo from './semabio-logo.svg'

import './styles.css'

class Navbar extends Component {
  variant = () => {
    return this.props.open ? '-open' : ''
  }

  render() {
    return (
      <div className={ `navbar ${this.variant()}` }>
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

        <NavBurger
          variant={this.variant()}
          onClick={this.props.toggleMenu}
        />
      </div>
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
