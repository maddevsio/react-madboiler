/* eslint-disable */
import React from 'react'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { theme } from './config/theme'
import { rootReducer } from './store'

const mockedReducer = (state = {}) => state

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)  

function customRender(
  ui,
  {
    route = '/',
    path = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    useMockedReducer = true,
    store = createStore(useMockedReducer ? mockedReducer : rootReducer, initialState, middlewareEnhancer),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Route path={path} exact>
              {children}
            </Route>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}
// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
export { createStore, mockedReducer }

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
