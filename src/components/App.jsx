import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <div className={styles['App']}>
        <div className={styles['App__header']}>
          <img
            src={logo}
            className={styles['App__header__logo']}
            alt='logo' />
          <h2>Welcome to Damon's Demo Task List</h2>
        </div>
      </div>
    )
  }
}

export default App
