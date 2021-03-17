import React from 'react'
import TodoList from './TodoList'

function Wrapper(props) {
  return <TodoList {...props} />
}

export default Wrapper
