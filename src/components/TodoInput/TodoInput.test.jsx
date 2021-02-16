import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import * as Redux from 'react-redux'
import { render } from '../../test.utils'

import TodoInput from './TodoInput'
import TodoWrapper from '.'

const dispatch = jest.fn(() => null)
Redux.useDispatch = () => dispatch

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

    expect(props.addTodo).toBeCalledWith('new element')
  })
})

describe('TodoWrapper component', () => {
  it('should render correctly', () => {
    const { container } = render(<TodoWrapper />)
    expect(container).toMatchSnapshot()
  })

  it('should handle click on add btn', () => {
    const { getByPlaceholderText, getByText } = render(<TodoWrapper />)

    const btn = getByText('Add')
    fireEvent.click(btn)

    expect(dispatch).not.toBeCalled()

    const input = getByPlaceholderText('Enter new todo')
    userEvent.type(input, 'new element')

    fireEvent.click(btn)

    expect(dispatch).toBeCalledTimes(1)
  })
})
