import React from 'react'
import { render, fireEvent } from '../../test.utils'

import TodoItem from './TodoItem'
import TodoWrapper from '.'

describe('TodoItem component', () => {
  const props = {
    todo: {
      text: 'TODO',
    },
    removeTodo: jest.fn(),
  }

  it('should render correctly', () => {
    const { container, getByText } = render(<TodoItem {...props} />)

    expect(getByText(props.todo.text)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should correctly called removeTodo after click on x btn', () => {
    const { getByText } = render(<TodoItem {...props} />)

    const btn = getByText('X')
    fireEvent.click(btn)

    expect(props.removeTodo).toBeCalledWith(props.todo)
  })
})

describe('TodoWrapper component', () => {
  const props = {
    todo: {
      text: 'TODO',
    },
    removeTodo: jest.fn(),
  }

  it('should render correctly', () => {
    const { container } = render(<TodoWrapper {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should handle click on add btn', () => {
    const { getByText } = render(<TodoWrapper {...props} />)

    const btn = getByText('X')
    fireEvent.click(btn)
  })
})
