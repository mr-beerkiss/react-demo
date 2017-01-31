import {connect} from 'react-redux'
import {
  addTask,
  taskChange,
  taskComplete,
  taskRemove
} from '../redux/taskList/taskListActions'

export default function (View) {
  return connect(
    (state) => {
      return {
        tasks: state.taskList.tasks
      }
    },
    (dispatch) => {
      return {
        addTaskAction () {
          dispatch(addTask())
        },
        taskChangeAction (index, value) {
          dispatch(taskChange(index, value))
        },
        taskCompleteAction (index, complete) {
          dispatch(taskComplete(index, complete))
        },
        taskRemoveAction (index) {
          dispatch(taskRemove(index))
        }
      }
    }
  )(View)
}
