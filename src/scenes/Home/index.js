import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-scroll'

import Button from '../../components/Button'
import Cloud from '../../components/Cloud'
import Navbar from '../../components/Navbar'

import tale1x from './tale@1x.png'
import tale2x from './tale@2x.png'

import './styles.css'

class Home extends Component {
  render() {
    return (
      <section className="page-home">
        <Navbar />
        <main className="call">
          <h1>A Odisseia da vida</h1>
          <p>Uma aventura pela origem da diversidade</p>

          <Link to="shop"
            smooth="easeInOutQuad"
            duration={500}
          >
            <Button color="red">
              Quero me inscrever
            </Button>
          </Link>
        </main>
        <img className="tale"
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

export default Home
