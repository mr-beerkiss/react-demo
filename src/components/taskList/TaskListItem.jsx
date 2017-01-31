import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import styles from './TaskListItem.css'
import deleteIcon from '../../assets/deleteIcon.svg'

export default class TaskListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    archived: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onComplete: PropTypes.func,
    onArchive: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {},
    onComplete: () => {},
    onArchive: () => {}
  }

  render () {
    const {
      name,
      complete,
      archived,
      onChange,
      onComplete,
      onArchive
    } = this.props

    return (
      <div className={classNames(styles.wrapper, {
        [styles.itemComplete]: complete,
        [styles.itemArchived]: archived
      })}>
        <input
          className={styles.taskText}
          type='text'
          value={name}
          disabled={complete}
          onChange={(e) => { onChange(e.target.value) }} />
        <input
          className={styles.checkbox}
          type='checkbox'
          onClick={() => { onComplete(!complete) }}
          checked={complete} />
        <img
          className={styles.deleteIcon}
          src={deleteIcon}
          alt='delete task'
          onClick={() => { onArchive(!archived) }} />
      </div>
    )
  }
}
