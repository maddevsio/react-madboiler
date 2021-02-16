export const camelToSnakeCase = str => str.replace(/([A-Z])/g, group => `_${group.toLowerCase()}`)
