import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './react/App.jsx'
import './global.css'

ReactDOM.render(
  React.createElement(Provider, {store},
    React.createElement(App)
  ),
  document.getElementById('root')
)
