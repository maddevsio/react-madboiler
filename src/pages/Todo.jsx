import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

export default function Todo() {
  return (
    <div className="todo">
      <h2 className="todo__title">TODO APP EXAMPLE</h2>
      <TodoList />
      <TodoInput />
    </div>
  )
}
