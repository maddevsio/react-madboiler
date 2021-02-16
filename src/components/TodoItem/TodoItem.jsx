import React from 'react'

import { Wrapper, Text, Remove } from './TodoItem.styles'

export default function TodoItem({ todo, removeTodo }) {
  return (
    <Wrapper>
      <Text>{todo.text}</Text>
      <Remove onClick={() => removeTodo(todo)}>X</Remove>
    </Wrapper>
  )
}
