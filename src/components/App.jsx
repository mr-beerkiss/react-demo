import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App__header'>
          <img
            src={logo}
            className='App__header__logo'
            alt='logo' />
          <h2>Welcome to Damon's Demo Task List</h2>
        </div>
      </div>
    )
  }
}

export default App
