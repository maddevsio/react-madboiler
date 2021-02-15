import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from '../TodoItem'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
}

function TodoList({ todos }) {

  if(!Boolean(todos.length)) return <div className="empty">No todos :)</div>

  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

TodoList.propTypes = propTypes

export default TodoList