import React from 'react'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'
import { getTodos } from '../../store/todo/selectors'

function Wrapper() {
  const todos = useSelector(getTodos)

  return <TodoList todos={todos} />
}

export default Wrapper