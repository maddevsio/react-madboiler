import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

import { Wrapper } from './TodoList.styles'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

function TodoList({ todos }) {
  if (!todos.length) return <div className="empty">No todos :)</div>

  return (
    <Wrapper>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Wrapper>
  )
}

TodoList.propTypes = propTypes

export default TodoList
