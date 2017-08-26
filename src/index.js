import React from 'react'
import ReactDOM from 'react-dom'
import App from './scenes/App'

import 'reset-css'
import './base/reset.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
