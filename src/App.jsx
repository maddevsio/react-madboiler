import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './config/theme'
import Router from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { ReactLogo, StyledApp } from './styles/App.styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <ReactLogo />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
