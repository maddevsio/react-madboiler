import { createAxiosInstance } from './api'
/**
 * App config
 */
export const config = {
  API_URL: process.env.REACT_APP_API_BASE_URL,
}

export const { api, setApiHeader } = createAxiosInstance(config)