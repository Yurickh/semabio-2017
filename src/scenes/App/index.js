import React, { Component } from 'react'
import Home from '../Home'
import About from '../About'
import Schedule from '../Schedule'
import Features from '../Features'
import Shop from '../Shop'
import Faq from '../Faq'
import Map from '../Map'
import Contact from '../Contact'
import PlacesToStay from '../PlacesToStay'
import Partners from '../Partners'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Schedule />
        <Features />
        <Shop />
        <Faq />
        <Map />
        <PlacesToStay />
        <Contact />
        <Partners />
      </div>
    )
  }
}

export default App
