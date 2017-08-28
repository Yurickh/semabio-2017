import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NavBurger from '../NavBurger'
import { Link } from 'react-scroll'

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

        { this.props.open
          ? (
            <div className='links'>
              <Link to="about"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Sobre
              </Link>
              <Link to="schedule"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Cronograma
              </Link>
              <Link to="features"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Programação
              </Link>
              <Link to="shop"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Inscrição
              </Link>
              <Link to="faq"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Dúvidas
              </Link>
              <Link to="map"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Como chegar
              </Link>
              <Link to="contact"
                smooth="easeInOutQuad"
                duration={500}
                className="link"
                onClick={this.props.toggleMenu}
              >
                Contato
              </Link>
            </div>
          )
          : null
        }
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
