import React from 'react'
import { render } from '../test.utils'

import App from '../App'

describe('App component', () => {
  it('should render correctly', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
