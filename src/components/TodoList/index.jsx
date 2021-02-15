import React from 'react'
import { useMount } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from './TodoList'

// store
import { getTodos } from '../../store/todo/selectors'
import { fetchTodos, getInitialTodos as getTodosList } from '../../store/todo/actions'

function Wrapper() {
  const todos = useSelector(getTodos)
  const dispatch = useDispatch()
  const getInitialTodos = () => dispatch(getTodosList())
  const fetchTodosList = () => dispatch(fetchTodos())

  useMount(() => {
    getInitialTodos()
    fetchTodosList()
  })

  return <TodoList todos={todos} />
}

export default Wrapper