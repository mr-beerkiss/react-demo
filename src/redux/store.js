import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import taskListReducer from './taskList/taskListReducer'

const store = createStore(
  combineReducers({
    taskList: taskListReducer
  }),
  applyMiddleware(
    thunk
  )
)

export default store
