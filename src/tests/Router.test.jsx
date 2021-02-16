import React from 'react'
import { render } from '../test.utils'

import Router from '../Router'

describe('Router component', () => {
  it('should render correctly', () => {
    const { container } = render(<Router />)
    expect(container).toMatchSnapshot()
  })
})
