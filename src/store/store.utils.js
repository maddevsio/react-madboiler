export const createReducer = (initialState = {}, actions = {}) => (state = initialState, actionData) => {
  const action = actions[actionData.type]
  if (!action) return state
  return action(state, actionData)
}

const defaultActionTypesConfig = { success: true, failure: true }
export const createActionTypes = (prefix, config = defaultActionTypesConfig, customSuffixes = []) => {
  if (!prefix) throw new Error('Invalid argument: prefix')

  const { success, failure } = config

  const types = {
    DEFAULT: `${prefix}`,
  }

  if (success) types.SUCCESS = `${prefix}_SUCCESS`
  if (failure) types.FAILURE = `${prefix}_FAILURE`

  if (customSuffixes) {
    customSuffixes.forEach(suffix => {
      const uppercased = suffix.toUpperCase()
      types[uppercased] = `${prefix}_${uppercased}`
    })
  }

  return types
}

export const createAction = (type, callback) => payload => {
  if (!callback)
    return {
      type,
      payload,
    }

  const data = callback(payload)
  return {
    type,
    payload: data,
  }
}

export const createAsyncAction = ({ DEFAULT, SUCCESS, FAILURE }, asyncCallback) => payload => (dispatch, getState) => {
  const action = createAction(DEFAULT)
  const success = p => dispatch(createAction(SUCCESS)(p))
  const failure = p => dispatch(createAction(FAILURE)(p))

  dispatch(action(payload))
  asyncCallback({ success, failure, dispatch, getState })
}

export const createSelector = (...selectors) => store =>
  selectors.reduce((data, selector) => selector(data || store), null)
