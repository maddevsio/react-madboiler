import { getRequestParams } from '../getRequestParams'

it('getRequestParams', () => {
  expect(getRequestParams('?hello=world&test=123&withoutValue', ['hello', 'not_exist', 'withoutValue'])).toEqual([
    'world',
    undefined,
    true,
  ])
})
