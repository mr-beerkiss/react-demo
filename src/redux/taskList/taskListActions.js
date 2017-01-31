export const TASK_LIST_ADD = 'TASK_LIST_ADD'
export const TASK_LIST_ITEM_CHANGE = 'TASK_LIST_ITEM_CHANGE'
export const TASK_LIST_ITEM_COMPLETE = 'TASK_LIST_ITEM_COMPLETE'
export const TASK_LIST_ITEM_REMOVE = 'TASK_LIST_ITEM_REMOVE'

export function addTask () {
  return {type: TASK_LIST_ADD}
}

export function taskChange (index, value) {
  return {
    type: TASK_LIST_ITEM_CHANGE,
    index,
    value
  }
}

export function taskComplete (index, complete) {
  return {
    type: TASK_LIST_ITEM_COMPLETE,
    index,
    complete
  }
}

export function taskRemove (index) {
  return {
    type: TASK_LIST_ITEM_REMOVE,
    index
  }
}
