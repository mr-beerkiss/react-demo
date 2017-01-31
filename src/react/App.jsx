import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import styles from './App.css'
import TaskList from './components/taskList/TaskList.jsx'
import connectState from './App.connect'

export class App extends Component {
  render () {
    const {tasks} = this.props

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
          data={tasks}
          onTaskChange={this.taskChangeHandler}
          onTaskComplete={this.taskCompleteHandler}
          onTaskRemove={this.taskRemoveHandler}
          onAddTask={this.addTaskHandler} />
      </div>
    )
  }

  addTaskHandler = () => {
    this.props.addTaskAction()
  }

  taskChangeHandler = (index, value) => {
    this.props.taskChangeAction(index, value)
  }

  taskCompleteHandler = (index, complete) => {
    this.props.taskCompleteAction(index, complete)
  }

  taskRemoveHandler = (index) => {
    this.props.taskRemoveAction(index)
  }
}

export default connectState(App)
