/* eslint-env jest */
import {
  addTask,
  taskChange,
  taskComplete,
  taskRemove,
  TASK_LIST_ADD,
  TASK_LIST_ITEM_CHANGE,
  TASK_LIST_ITEM_COMPLETE,
  TASK_LIST_ITEM_REMOVE
} from '../taskListActions'

it('addTask() action', () => {
  expect(addTask()).toEqual({type: TASK_LIST_ADD})
})

it('taskChange() action', () => {
  expect(taskChange(1, 'x')).toEqual({
    type: TASK_LIST_ITEM_CHANGE,
    index: 1,
    value: 'x'
  })
})

it('taskComplete() action', () => {
  expect(taskComplete(1, 'x')).toEqual({
    type: TASK_LIST_ITEM_COMPLETE,
    index: 1,
    complete: 'x'
  })
})

it('taskRemove() action', () => {
  expect(taskRemove(1)).toEqual({
    type: TASK_LIST_ITEM_REMOVE,
    index: 1
  })
})
