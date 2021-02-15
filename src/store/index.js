import { combineReducers } from 'redux'
import { todosReducer } from './todo/reducer'

/**
 * Reducer
 */
export const rootReducer = combineReducers({
  todos: todosReducer,
})