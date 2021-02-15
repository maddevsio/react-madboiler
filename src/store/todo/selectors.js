import { createSelector } from '../store.utils'

export const getTodos = createSelector(
  state => state.todos,
  todos => todos.todos || [],
)