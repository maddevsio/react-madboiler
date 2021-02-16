import React from 'react'
import { render } from '../../test.utils'

import Todo from '../Todo'

describe('Todo page', () => {
  it('should render correctly', () => {
    const { container } = render(<Todo />)
    expect(container).toMatchSnapshot()
  })
})
