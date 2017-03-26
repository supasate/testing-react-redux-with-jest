import { createStore } from '../'
import todosReducer from '../../reducers/todosReducer'
import { ADD_TODO_SUCCESS } from '../../actions/types'

describe('store', () => {
  let store

  beforeEach(() => {
    store = createStore()
  })

  it('has correct default state of the root reducer', () => {
    expect(store.getState().todos).toEqual(todosReducer(undefined, {}))
  })

  it('loads initial state correctly', () => {
    const preloadedState = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    store = createStore(preloadedState)

    expect(store.getState().todos).toEqual(preloadedState.todos)
  })

  it('child reducer handles and action', () => {
    const action = {
      type: ADD_TODO_SUCCESS,
      payload: { id: 1, text: 'Hello', complete: false },
    }
    store.dispatch(action)
    expect(store.getState().todos).toEqual(todosReducer(undefined, action))
  })
})
