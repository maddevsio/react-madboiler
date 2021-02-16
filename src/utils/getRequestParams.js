/**
 * Function for getting request params from search
 * @example
 * // returns ['2','1']
 * getRequestParams('?value=1&key=2', ['key', 'value'])
 * @function
 * @param {string} query
 * @param {Array<string>} keys
 * @returns {Array<string>}
 */
export const getRequestParams = (query, keys) =>
  keys.reduce((acc, key) => {
    const regexp = new RegExp(`[?&]${key}=([^&]+).*$`)
    const match = query.match(regexp)
    if (!match && query.includes(key)) return [...acc, true]
    if (match && match[1]) return [...acc, match[1]]
    return [...acc, undefined]
  }, [])
