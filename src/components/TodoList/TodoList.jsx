import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

import { Wrapper } from './TodoList.styles'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  removeTodo: PropTypes.func,
}

function TodoList({ todos, removeTodo }) {
  if (!todos.length) return <div className="empty">No todos :)</div>

  return (
    <Wrapper>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </Wrapper>
  )
}

TodoList.propTypes = propTypes

export default TodoList
