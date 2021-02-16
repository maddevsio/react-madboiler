import axios from 'axios'

export const createAxiosInstance = config => {
  /**
   * Axios config
   * @see {@link https://github.com/axios/axios#config-defaults}
   * @type {Object}
   */
  const axiosConfig = {
    /**
     * Base url
     * @type {string}
     */
    baseURL: config.API_URL,
    /**
     * Base headers
     * @type {Object}
     */
    headers: {},
  }

  const api = axios.create(axiosConfig)

  const setApiHeader = (key, value) => {
    api.defaults.headers.common[key] = value
  }

  return { api, setApiHeader }
}