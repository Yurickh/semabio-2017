import React, { Component } from 'react'

import Cloud from '../../components/Cloud'
import Navbar from '../../components/Navbar'
import Countdown from '../../components/Countdown'

import tale1x from './tale@1x.png'
import tale2x from './tale@2x.png'

import './styles.css'

class Home extends Component {

  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    })
  }

  variant = () => {
    return this.state.menuIsOpen ? '-open' : ''
  }

  render() {
    return (
      <section className={`page-home ${this.variant()}`}>
        <Navbar
          open={this.state.menuIsOpen}
          toggleMenu={this.toggleMenu}
        />

        <main className="call">
          <h1>A Odisseia da vida</h1>
          <p>Uma aventura pela origem da diversidade</p>
          <span>Falta pouco pra você se inscrever</span>

          {/* year, month, day, hour, minute */}
          <Countdown until={new Date(2017, 8, 21, 0, 0)} />
        </main>

        <img className={`tale`}
          alt=""
          srcSet={
            `${tale1x} 1x,
             ${tale2x} 2x`
          }
          src={tale1x}
        />

        <Cloud />
      </section>
    )
  }
}

Home.propTypes = {
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default Home
