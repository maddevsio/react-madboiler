import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from '.'

function configureStore(preloadedState = {}) {
  const middlewares = [thunk, createLogger({ collapsed: true })]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer)

  return store
}

const store = configureStore()
export { store }
