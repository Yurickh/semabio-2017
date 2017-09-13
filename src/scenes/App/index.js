import React, { Component } from 'react'
import Home from '../Home'
import About from '../About'
import Shop from '../Shop'
import Map from '../Map'
import Contact from '../Contact'
import PlacesToStay from '../PlacesToStay'
import Buy from '../Buy'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const SPA = (props) => (
  <div className="App">
    <Home {...props} />
    <About {...props} />
    {/* <Schedule {...props} />
    <Features {...props} /> */}
    <Shop {...props} />
    {/* <Faq {...props} /> */}
    <Map {...props} />
    <PlacesToStay {...props} />
    <Contact {...props} />
    {/*<Partners {...props} /> */}
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/comprar/:product" component={Buy} />
          <Route exact path="/" component={SPA} />
        </div>
      </Router>
    )
  }
}

export default App
