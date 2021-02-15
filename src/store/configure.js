import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from '.'
import { setApiHeader } from '../config'
import { loadState, saveState } from './localStorage'

function configureStore(preloadedState = {}) {
  // Redux logger
  const logger = createLogger({ collapsed: true })

  const middlewares = [logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer)

  return store
}

// Initial auth
const authState = loadState('auth')

if (authState) {
  setApiHeader('Authorization', `Bearer ${authState.token}`)
}

const store = configureStore({
  auth: {
    ...authState,
    user: null,
  },
})

store.subscribe(() => {
  // Getting state
  const { auth } = store.getState()

  if (!auth) return;

  // setting axios Authorization header
  setApiHeader('Authorization', `Bearer ${auth.token}`)

  // save state into the LocalStorage
  saveState(auth, 'auth')
})

export { store }
