const indexContent = name => `import React from 'react'
import ${name} from './${name}'

function Wrapper(props) {
  return <${name} {...props} />
}

export default Wrapper
`

const componentContent = name => `import React from 'react'
import PropTypes from 'prop-types'

// styles
import { Wrapper } from './${name}.styles'

function ${name}() {
  return <Wrapper>Content</Wrapper>
}

${name}.propTypes = {}

export default ${name}
`

const styleContent = () => `import styled from 'styled-components'

export const Wrapper = styled.div\`\`
`

const testContent = name => `import React from 'react'
import { render } from '../../test.utils'

import ${name} from './${name}'

describe('${name} component', () => {
  it('should render correctly', () => {
    const { container } = render(<${name} />)
    expect(container).toMatchSnapshot()
  })
})
`

module.exports = {
  componentContent,
  styleContent,
  testContent,
  indexContent,
}
