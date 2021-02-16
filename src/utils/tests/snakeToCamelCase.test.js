import { snakeToCamelCase } from '../snakeToCamelCase'

it('snakeToCamelCase', () => {
  expect(snakeToCamelCase('snake_case')).toBe('snakeCase')
})
