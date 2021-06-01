import React from 'react'

// assets
import logo from '../../assets/images/md.svg'

import { Wrapper, Logo, Title, Description, Link } from './Main.styles'

export default function Main() {
  return (
    <Wrapper>
      <Logo src={logo} alt="MAD DEVS" />
      <Title>React-madboiler</Title>
      <Description>
        Simple boilerplate for
        <Link href="https://ru.reactjs.org/" target="_blank" color="react">
          React
        </Link>
        from
        <Link href="https://maddevs.io/" target="_blank" color="primary">
          Mad Devs
        </Link>
      </Description>
    </Wrapper>
  )
}
