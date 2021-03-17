import React from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import uniqid from 'uniqid'
import { render } from '../../test.utils'

import TodoInput from './TodoInput'
import TodoWrapper from '.'

jest.mock('uniqid', () => () => 1)

describe('TodoInput component', () => {
  const props = {
    addTodo: jest.fn(),
  }

  it('should render correctly', () => {
    const { container, getByText } = render(<TodoInput {...props} />)

    expect(getByText('Add')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle input change', () => {
    const { container, getByPlaceholderText } = render(<TodoInput {...props} />)

    const input = getByPlaceholderText('Enter new todo')
    userEvent.type(input, 'new element')

    expect(container).toMatchSnapshot()
  })

  it('should handle click on add btn', () => {
    const { getByPlaceholderText, getByText } = render(<TodoInput {...props} />)

    const btn = getByText('Add')
    fireEvent.click(btn)

    expect(props.addTodo).not.toBeCalled()

    const input = getByPlaceholderText('Enter new todo')
    userEvent.type(input, 'new element')

    fireEvent.click(btn)

    expect(props.addTodo).toBeCalledWith({ id: uniqid(), text: 'new element' })
  })
})

describe('TodoWrapper component', () => {
  const props = {
    addTodo: jest.fn(),
  }

  it('should render correctly', () => {
    const { container } = render(<TodoWrapper {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('should handle click on add btn', () => {
    const { getByPlaceholderText, getByText } = render(<TodoWrapper {...props} />)
    const btn = getByText('Add')
    fireEvent.click(btn)
    const input = getByPlaceholderText('Enter new todo')
    userEvent.type(input, 'new element')
    fireEvent.click(btn)
  })
})
