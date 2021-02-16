import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Input, Button } from './TodoInput.styles'

const propTypes = {
  addTodo: PropTypes.func,
}

function TodoInput({ addTodo }) {
  const [value, setValue] = useState('')

  const handleAddTodo = () => {
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <Wrapper>
      <Input placeholder="Enter new todo" type="text" value={value} onChange={e => setValue(e.target.value)} />
      <Button onClick={handleAddTodo}>Add</Button>
    </Wrapper>
  )
}

TodoInput.propTypes = propTypes

export default TodoInput
