import todosReducer from '../todosReducer'
import { ADD_TODO, FETCH_TODOS_SUCCESS } from '../../actions/types'

describe('todosReducer', () => {
  it('returns correct initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([])
  })

  it('returns current state if no action matched', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const nextState = todosReducer(curState, {})
    expect(nextState).toBe(curState) // compare pointers
    expect(nextState).toEqual(curState) // compare values
  })

  it('adds todos when receiving ADD_TODO action', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const action = {
      type: ADD_TODO,
      payload: { text: 'Sleep' },
    }
    const nextState = todosReducer(curState, action)
    const expectedState = [
      { id: 1, text: 'Feed cat', complete: false },
      { id: 2, text: 'Sleep', complete: false },
    ]
    expect(nextState).toEqual(expectedState)
    expect(nextState).not.toBe(curState)
  })

  it('returns new todos when receiving FETCH_TODOS_SUCCESS action', () => {
    const curState = [
      { id: 1, text: 'Feed cat', complete: false },
    ]
    const action = {
      type: FETCH_TODOS_SUCCESS,
      payload: {
        todos: [
          { id: 1, text: 'Feed cat', complete: false },
          { id: 2, text: 'Sleep', complete: false },
        ],
      },
    }
    const nextState = todosReducer(curState, action)
    expect(nextState).toEqual(action.payload.todos)
    expect(nextState).not.toBe(curState)
  })
})
