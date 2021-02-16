import React, { useState } from 'react'

import { Wrapper, Input, Button } from './TodoInput.styles'

export default function TodoInput({ addTodo }) {
  const [value, setValue] = useState('')

  const handleAddTodo = () => {
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <Wrapper>
      <Input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <Button onClick={handleAddTodo}>Add</Button>
    </Wrapper>
  )
}
