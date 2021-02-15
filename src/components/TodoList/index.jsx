import React from 'react'
import { useMount } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from './TodoList'

// store
import { getTodos } from '../../store/todo/selectors'
import { getInitialTodos as getTodosList } from '../../store/todo/actions'

function Wrapper() {
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()
  const getInitialTodos = () => dispatch(getTodosList())

  useMount(() => getInitialTodos())

  return <TodoList todos={todos} />
}

export default Wrapper