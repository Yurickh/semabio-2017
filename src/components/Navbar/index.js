import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

// import iconFacebook from './facebook.svg'
// import iconInstagram from './instagram.svg'
import semabioLogo from './semabio-logo.svg'

import './styles.css'

const Navbar = props => {
  return (
    <div className={ props.open ? '-open navbar' : 'navbar' }>
      <a href="/" className="brand">
        <img className="logo" src={semabioLogo} />
        <span className="name">
          Semana da Biologia
        </span>
      </a>
      <div className={ `nav-burger${props.open? ' -open':''}` }
          onClick={ () => props.toggleMenu() }>
        </div>
    </div>
  )
}

Navbar.propTypes = {
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default Navbar
