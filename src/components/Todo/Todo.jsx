import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Title } from './Todo.styles'

import TodoList from '../TodoList'
import TodoInput from '../TodoInput'

const propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
}

function Todo({ todos, addTodo, removeTodo }) {
  return (
    <Wrapper>
      <Title>TODO APP EXAMPLE</Title>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoInput addTodo={addTodo} />
    </Wrapper>
  )
}

Todo.propTypes = propTypes

export default Todo
