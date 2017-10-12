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

import BuyShirt from '../BuyShirt'
import BuyPackage from '../BuyPackage'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const SPA = (props) => (
  <div className="App">
    <Home {...props} />
    <About {...props} />
    <Schedule {...props} />
    <Features {...props} />
    <Shop {...props} />
    <Faq {...props} />
    <Map {...props} />
    <PlacesToStay {...props} />
    <Contact {...props} />
    <Partners {...props} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/comprar/camiseta" component={BuyShirt} />
          <Route path="/comprar/:product/:checkoutId" component={BuyShirt} />
          <Route path="/comprar/:product" component={BuyPackage} /> */}
          <Route exact path="/" component={SPA} />
        </Switch>
      </Router>
    )
  }
}

export default App
