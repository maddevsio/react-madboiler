import React, { useState } from 'react'

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState('')

  const handleAddTodo = () => {
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return <div className="todo-input">
    <input type="text" value={value} onChange={e => setValue(e.target.value)} className="todo-input__field"/>
    <button className="todo-input__btn" onClick={handleAddTodo}>Add</button>
  </div>
}
