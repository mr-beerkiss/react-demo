/* eslint-env jest */
import {
  addTask,
  taskChange,
  taskComplete,
  taskRemove
} from '../taskListActions'
import taskListReducer from '../taskListReducer'

let state, newState

beforeEach(() => {
  state = {
    tasks: [{
      name: 'Task 1',
      complete: false
    }]
  }
})

it('reducer addTask action', () => {
  newState = taskListReducer(state, addTask())
  expect(newState.tasks).toEqual([{
    name: 'Task 1',
    complete: false
  }, {
    name: '',
    complete: false
  }])
})

it('reducer taskChange action', () => {
  newState = taskListReducer(state, taskChange(0, 'x'))
  expect(newState.tasks).toEqual([{
    name: 'x',
    complete: false
  }])
})

it('reducer taskComplete action', () => {
  newState = taskListReducer(state, taskComplete(0, true))
  expect(newState.tasks).toEqual([{
    name: 'Task 1',
    complete: true
  }])
})

it('reducer taskRemove action', () => {
  newState = taskListReducer(state, taskRemove(0))
  expect(newState.tasks).toEqual([])
})
