import React from 'react'
import TodoItem from '../TodoItem'

export default function TodoList({ todos }) {

  if(!Boolean(todos.length)) return <div className="empty">No todos :)</div>

  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}
