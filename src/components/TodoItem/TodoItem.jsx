import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Text, Remove } from './TodoItem.styles'

const propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
  }),
  removeTodo: PropTypes.func.isRequired,
}

function TodoItem({ todo, removeTodo }) {
  return (
    <Wrapper>
      <Text>{todo.text}</Text>
      <Remove onClick={() => removeTodo(todo)}>X</Remove>
    </Wrapper>
  )
}

TodoItem.propTypes = propTypes

export default TodoItem
