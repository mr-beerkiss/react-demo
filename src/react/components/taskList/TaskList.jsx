import React, {Component, PropTypes} from 'react'
import styles from './TaskList.css'
import TaskListItem from './TaskListItem.jsx'

export default class TaskList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      removed: PropTypes.bool.isRequired
    })),
    onTaskChange: PropTypes.func,
    onTaskComplete: PropTypes.func,
    onTaskRemove: PropTypes.func,
    onAddTask: PropTypes.func
  }

  static defaultProps = {
    data: []
  }

  render () {
    const {
      data,
      onTaskChange,
      onTaskComplete,
      onTaskRemove,
      onAddTask
    } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.tasks}>
          {data.map((item, index) => (
            <TaskListItem
              key={index}
              name={item.name}
              complete={item.complete}
              removed={item.removed}
              onChange={(value) => onTaskChange && onTaskChange(index, value)}
              onComplete={(complete) => onTaskComplete && onTaskComplete(index, complete)}
              onRemove={() => onTaskRemove && onTaskRemove(index)} />
          ))}
        </div>
        <button
          className={styles.newTask}
          onClick={() => onAddTask && onAddTask()}>
          Add Task
        </button>
      </div>
    )
  }
}
