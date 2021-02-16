import React from 'react'
import { render } from '../../test.utils'

import Todo from '.'

describe('Todo component', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Todo />)

    expect(getByText('TODO APP EXAMPLE')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
