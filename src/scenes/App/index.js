import React, { Component } from 'react'
import Home from '../Home'
import Shop from '../Shop'
import Faq from '../Faq'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <About />
        <Team />
        <Schedule />
        <Features />
        */}
        <Shop />
        <Faq />
        {/*<PlacesToStay />
        <Map />
        <Contact />
        <Partners /> */}
      </div>
    )
  }
}

export default App
