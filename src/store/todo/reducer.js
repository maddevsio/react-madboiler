import { createReducer } from '../store.utils'
import { ADD_TODO, GET_INITIAL_TODOS, REMOVE_TODO } from './actions'

export const initialState = {
  todos: [],
}

const onDeleteTodo = (todos, { id }) => todos.filter(todo => todo.id !== id)

export const todosReducer = createReducer(initialState, {
  [GET_INITIAL_TODOS.DEFAULT](state, action) {
    return { ...state, todos: [...action.payload] }
  },
  [ADD_TODO.DEFAULT](state, action) {
    return { ...state, todos: [...state.todos, action.payload] }
  },
  [REMOVE_TODO.DEFAULT](state, action) {
    return { ...state, todos: onDeleteTodo(state.todos, action.payload) }
  },
})
