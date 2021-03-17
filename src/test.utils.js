/* eslint-disable */
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { theme } from './config/theme'

function customRender(
  ui,
  {
    route = '/',
    path = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Route path={path} exact>
            {children}
          </Route>
        </Router>
      </ThemeProvider>
    )
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

export const makeFormikMethods = mockFn => ({
  resetForm: mockFn,
  setErrors: mockFn,
  setFieldError: mockFn,
  setFieldTouched: mockFn,
  setFieldValue: mockFn,
  setFormikState: mockFn,
  setStatus: mockFn,
  setSubmitting: mockFn,
  setTouched: mockFn,
  setValues: mockFn,
  submitForm: mockFn,
  validateField: mockFn,
  validateForm: mockFn,
})
