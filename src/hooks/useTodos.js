import { useList, useMount, useUpdateEffect } from 'react-use'

import { loadState, saveState } from '../utils/localStorage'

const useTodos = (key = 'TODOS') => {
  const [todos, todosActions] = useList([])

  const getInitialTodos = () => {
    const state = loadState(key)
    if (Array.isArray(state)) todosActions.set(state)
  }

  const addTodo = todo => todosActions.push(todo)

  const removeTodo = todo => todosActions.filter(t => t.id !== todo.id)

  useMount(() => {
    getInitialTodos()
  })

  useUpdateEffect(() => {
    saveState(todos, key)
  }, [todos])

  return {
    todos,
    addTodo,
    removeTodo,
  }
}

export default useTodos
