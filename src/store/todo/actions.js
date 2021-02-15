import { loadState, saveState } from '../../utils/localStorage'
import { createActionTypes, createAction } from '../store.utils'

export const GET_INITIAL_TODOS = createActionTypes('GET_INITIAL_TODOS', { success: false, failure: false })
export const ADD_TODO = createActionTypes('ADD_TODO', { success: false, failure: false })
export const REMOVE_TODO = createActionTypes('REMOVE_TODO', { success: false, failure: false })

export const getInitialTodos = createAction(GET_INITIAL_TODOS.DEFAULT, () => {
  const todos = loadState('todos') || []
  return todos
})

export const addTodo = createAction(ADD_TODO.DEFAULT, payload => {
  const currentTodos = loadState('todos') || []
  const newTodos = [...currentTodos, payload]
  saveState(newTodos, 'todos')
  return payload
})

export const removeTodo = createAction(REMOVE_TODO.DEFAULT, payload => {
  const currentTodos = loadState('todos') || []
  const newTodos = currentTodos.filter(todo => todo.id !== payload.id)
  saveState(newTodos, 'todos')
  return payload
})