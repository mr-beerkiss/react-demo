import React, {Component, PropTypes} from 'react'
import styles from './TaskList.css'
import TaskListItem from './TaskListItem.jsx'

export default class TaskList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      archived: PropTypes.bool.isRequired
    })),
    onTaskChange: PropTypes.func,
    onTaskComplete: PropTypes.func,
    onTaskArchive: PropTypes.func,
    onNewTask: PropTypes.func
  }

  static defaultProps = {
    data: []
  }

  render () {
    const {
      data,
      onTaskChange,
      onTaskComplete,
      onTaskArchive,
      onNewTask
    } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.tasks}>
          {data.map((item, index) => (
            <TaskListItem
              key={index}
              name={item.name}
              complete={item.complete}
              archived={item.archived}
              onChange={(value) => onTaskChange && onTaskChange(index, value)}
              onComplete={(complete) => onTaskComplete && onTaskComplete(index, complete)}
              onArchive={(archive) => onTaskArchive && onTaskArchive(index, archive)} />
          ))}
        </div>
        <button
          className={styles.newTask}
          onClick={() => onNewTask && onNewTask()}>
          New Task
        </button>
      </div>
    )
  }
}
