import { normalizeObjectKeys } from './normalizeObjectKeys'

export const normalizeCollectionKeys = (collection, toSnake = false) =>
  collection.map(item => normalizeObjectKeys(item, toSnake))