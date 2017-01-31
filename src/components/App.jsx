import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import styles from './App.css'
import TaskList from './taskList/TaskList.jsx'

class App extends Component {
  constructor () {
    super()

    this.state = {
      tasks: [{
        name: 'Task 1',
        complete: false,
        archived: false
      }]
    }
  }

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
        <TaskList
          data={this.state.tasks}
          onTaskChange={this.taskChangeHandler}
          onTaskComplete={this.taskClickHandler}
          onTaskArchive={this.taskArchvieHandler}
          onNewTask={this.newTaskHandler} />
      </div>
    )
  }

  taskChangeHandler = (index, value) => {
    this.updateTask('name', index, value)
  }

  taskClickHandler = (index, complete) => {
    this.updateTask('complete', index, complete)
  }

  taskArchvieHandler = (index, archive) => {
    this.updateTask('archived', index, archive)
  }

  updateTask (field, index, value) {
    const newTasks = this.state.tasks.concat([]) // immutability
    newTasks[index][field] = value
    this.setState({
      tasks: newTasks
    })
  }

  newTaskHandler = () => {
    const newTasks = this.state.tasks.concat([{
      name: '',
      complete: false,
      archived: false
    }]) // immutability
    this.setState({
      tasks: newTasks
    })
  }
}

export default App
