import { camelToSnakeCase } from '../camelToSnakeCase'

it('camelToSnakeCase', () => {
  expect(camelToSnakeCase('camelCase')).toBe('camel_case')
})
