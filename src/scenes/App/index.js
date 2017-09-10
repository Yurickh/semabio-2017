import React, { Component } from 'react'
import Home from '../Home'
import About from '../About'
import Shop from '../Shop'
import Faq from '../Faq'
import Map from '../Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        {/* <Schedule />
        <Features /> */}
        <Shop />
        <Faq />
        {/*<PlacesToStay />
        {/* <Faq />
        <PlacesToStay />
        */}
        <Map />
        {/*<Contact />
        <Partners /> */}
      </div>
    )
  }
}

export default App
