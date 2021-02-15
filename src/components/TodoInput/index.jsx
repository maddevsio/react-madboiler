import React from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todo/actions'
import TodoInput from './TodoInput'

function Wrapper(props) {
  const dispatch = useDispatch()

  return <TodoInput {...props} addTodo={(text) => dispatch(addTodo({ text, id: uniqid() }))} />
}

export default Wrapper