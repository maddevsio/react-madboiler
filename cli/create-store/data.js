const actionsContent = () => `import { createActionTypes, createAction, createAsyncAction } from '../store.utils'
`

const reducerContent = name => `import { createReducer } from '../store.utils'

export const initialState = {}

export const ${name}Reducer = createReducer(initialState, {})
`

const selectorsContent = () => `import { createSelector } from '../store.utils'
`

const testContent = name => `import { ${name}Reducer as reducer, initialState } from './reducer'
import * as actions from './actions'

describe('${name} reducer', () => {
  it('should handle undefined and return initialState', () => {
    expect(reducer(initialState, { type: undefined })).toEqual(initialState)
  })
})
`

module.exports = {
  actionsContent,
  reducerContent,
  testContent,
  selectorsContent,
}
