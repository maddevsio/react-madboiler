import * as actions from './actions'
import { todosReducer, initialState } from './reducer'
import * as selectors from './selectors'

jest.useFakeTimers()

describe('Todo actions', () => {
  it('fetchTodos', async () => {
    const dispatch = jest.fn()
    const payload = {}
    const action = actions.fetchTodos(payload)
    action(dispatch)
    expect(dispatch).toBeCalledWith({ payload, type: actions.FETCH_TODOS.DEFAULT })
  })
})

describe('Todo reducer', () => {
  it('should handle undefined and return initialState', () => {
    expect(todosReducer(initialState, { type: undefined })).toEqual(initialState)
  })

  it('should handle GET_INITIAL_TODOS.DEFAULT', () => {
    expect(todosReducer(initialState, { type: actions.GET_INITIAL_TODOS.DEFAULT, payload: [1, 2, 3] })).toEqual({
      todos: [1, 2, 3],
    })
  })

  it('should handle ADD_TODO.DEFAULT', () => {
    expect(todosReducer(initialState, { type: actions.ADD_TODO.DEFAULT, payload: 'todo' })).toEqual({
      todos: ['todo'],
    })
  })

  it('should handle REMOVE_TODO.DEFAULT', () => {
    expect(todosReducer({ todos: [{ id: 1 }] }, { type: actions.REMOVE_TODO.DEFAULT, payload: { id: 1 } })).toEqual({
      todos: [],
    })
  })
})
