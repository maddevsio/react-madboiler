import React from 'react'
import { render } from '../../test.utils'

import Main from './Main'

describe('Main component', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Main />)

    expect(getByText('React MAD Boiler')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
