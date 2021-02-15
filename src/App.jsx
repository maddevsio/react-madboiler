import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store/configure'
import Router from './Router'

// styles
import './styles/index.scss'

function App() {
  return (
    <div className="app">
      <div className="react-logo" />
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
