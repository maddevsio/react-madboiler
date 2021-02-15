import { useDispatch } from 'react-redux'

/**
 * Custom hook for use redux actions
 * @param {Object} rawActions
 * @returns {Object}
 */
const useActions = rawActions => {
  const dispatch = useDispatch()

  /**
   * Getting actions
   * Action - function wrapped with dispatch()
   * @type {Object}
   */
  const actions = Object.entries(rawActions).reduce(
    (acc, [key, action]) => ({
      ...acc,
      [key]: (...args) => dispatch(action(...args)),
    }),
    {},
  )

  return actions
}

export default useActions
