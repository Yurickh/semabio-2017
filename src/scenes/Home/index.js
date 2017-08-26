import React, { Component } from 'react'
import Button from '../../components/Button'

import './styles.css'

class Home extends Component {
  render() {
    return (
      <section className="page-home">
        <main className="call">
          <h1>A Odisseia da vida</h1>
          <p>Uma aventura pela origem da diversidade</p>

          <Button color="red">
            Quero me inscrever
          </Button>
        </main>
      </section>
    )
  }
}

export default Home
