import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img
            src={logo}
            className={styles.logo}
            alt='logo' />
          <h2>Welcome to Damon's Demo Task List</h2>
        </div>
      </div>
    )
  }
}

export default App
