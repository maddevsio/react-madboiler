import React from 'react'

import { Wrapper, Title } from './Todo.styles'

import TodoList from '../TodoList'
import TodoInput from '../TodoInput'

export default function Todo() {
  return (
    <Wrapper>
      <Title>TODO APP EXAMPLE</Title>
      <TodoList />
      <TodoInput />
    </Wrapper>
  )
}
