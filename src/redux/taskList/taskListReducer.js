import {
  TASK_LIST_ADD,
  TASK_LIST_ITEM_CHANGE,
  TASK_LIST_ITEM_COMPLETE,
  TASK_LIST_ITEM_REMOVE
} from './taskListActions'

export const initialState = {
  tasks: [{
    name: 'Task 1',
    complete: false,
    removed: false
  }]
}

function updateTask (state, field, index, value) {
  const newTasks = state.tasks.concat([]) // immutability
  newTasks[index][field] = value
  return newTasks
}

export default function reducer (state = initialState, action) {
  let tasks

  switch (action.type) {
    case TASK_LIST_ADD:
      tasks = state.tasks.concat([{
        name: '',
        complete: false,
        removed: false
      }]) // immutability
      return Object.assign({}, state, {tasks})

    case TASK_LIST_ITEM_CHANGE:
      tasks = updateTask(state, 'name', action.index, action.value)
      return Object.assign({}, state, {tasks})

    case TASK_LIST_ITEM_COMPLETE:
      tasks = updateTask(state, 'complete', action.index, action.complete)
      return Object.assign({}, state, {tasks})

    case TASK_LIST_ITEM_REMOVE:
      tasks = updateTask(state, 'removed', action.index, true)
      return Object.assign({}, state, {tasks})

    default:
      return state
  }
}