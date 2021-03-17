import React from 'react'
import { render } from '../../test.utils'

import TodoList from './TodoList'

describe('TodoList component', () => {
  const props = {
    todos: [
      {
        id: 1,
        text: 'Test todo',
      },
    ],
    removeTodo: jest.fn(),
  }

  it('should render correctly', () => {
    const { container, getByText } = render(<TodoList {...props} />)

    expect(getByText('Test todo')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
