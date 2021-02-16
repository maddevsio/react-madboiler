import { camelToSnakeCase } from './camelToSnakeCase'
import { snakeToCamelCase } from './snakeToCamelCase'

export const normalizeObjectKeys = (obj, toSnake = false) =>
  Object.entries(obj).reduce((accum, [rawKey, value]) => {
    const key = toSnake ? camelToSnakeCase(rawKey) : snakeToCamelCase(rawKey)
    return { ...accum, [key]: value }
  }, {})