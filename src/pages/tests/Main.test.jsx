import React from 'react'
import { render } from '../../test.utils'

import Main from '../Main'

describe('Main page', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />)
    expect(container).toMatchSnapshot()
  })
})
