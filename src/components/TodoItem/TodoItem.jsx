import React from 'react'

export default function TodoItem({ todo, removeTodo }) {
  return (
  <div className="todo-list__item">
    <span className="todo-list__item-text">{todo.text}</span>
    <span className="todo-list__item-remove" onClick={() => removeTodo(todo)}>X</span>
  </div>
  )
}
