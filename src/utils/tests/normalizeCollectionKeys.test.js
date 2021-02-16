import { normalizeCollectionKeys } from '../normalizeCollectionKeys'

it('normalizeCollectionKeys to camel', () => {
  expect(normalizeCollectionKeys([{ obj_key: 123, objSecondKey: 321 }])).toEqual([{ objKey: 123, objSecondKey: 321 }])
})

it('normalizeObjectKeys to snake', () => {
  expect(normalizeCollectionKeys([{ obj_key: 123, objSecondKey: 321 }], true)).toEqual([
    { obj_key: 123, obj_second_key: 321 },
  ])
})
