import React, { Component } from 'react'
import Home from '../Home'
import About from '../About'
import Shop from '../Shop'
import Map from '../Map'
import Contact from '../Contact'
import PlacesToStay from '../PlacesToStay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        {/* <Schedule />
        <Features /> */}
        <Shop />
        {/* <Faq />
        */}
        <Map />
        <PlacesToStay />
        <Contact />
        {/*<Partners /> */}
      </div>
    )
  }
}

export default App
