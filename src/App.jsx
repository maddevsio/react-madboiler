import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { store } from './store/configure'
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
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
