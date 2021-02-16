import { renderHook } from '@testing-library/react-hooks'
import * as Redux from 'react-redux'

import useActions from '../useActions'

const dispatch = jest.fn(val => val)
Redux.useDispatch = () => dispatch

describe('useActions hook', () => {
  const actions = {
    first: jest.fn(),
    second: jest.fn(),
  }

  it('render correctly', () => {
    const { result } = renderHook(() => useActions(actions))
    expect(result.current).toHaveProperty('first')
    expect(result.current).toHaveProperty('second')

    result.current.first('123')
    expect(dispatch).toBeCalledTimes(1)
    expect(actions.first).toBeCalledTimes(1)
  })
})
