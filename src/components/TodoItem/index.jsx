import React from 'react'
import { useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import { removeTodo } from '../../store/todo/actions'

function Wrapper(props) {
  const dispatch = useDispatch()

  return <TodoItem {...props} removeTodo={todo => dispatch(removeTodo(todo))} />
}

export default Wrapper
