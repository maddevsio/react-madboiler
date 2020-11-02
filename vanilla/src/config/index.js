import axios from 'axios'

/**
 * App config
 */
const config = {
  API_URL: process.env.REACT_APP_API_BASE_URL,
}

/**
 * Api config
 */
const axiosConfig = {
  baseURL: config.API_URL,
}

/**
 * Axios instance
 */
const api = axios.create(axiosConfig)

const setApiHeader = (key, value) => {
  api.defaults.headers.common[key] = value
}

export { api, config, setApiHeader }
