export const snakeToCamelCase = str =>
  str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))
