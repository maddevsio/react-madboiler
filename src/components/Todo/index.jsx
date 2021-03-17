import React from 'react'
import Todo from './Todo'

// hooks
import useTodos from '../../hooks/useTodos'

function Wrapper(props) {
  const todos = useTodos()
  return <Todo {...props} {...todos} />
}

export default Wrapper
