import { ADD_TODO } from '../types'
import { addTodo } from '../todos'

describe('Todos actions', () => {
  it('creates ADD_TODO action when calling addTodo()', () => {
    const actual = addTodo('Sleep')
    const expected = {
      type: ADD_TODO,
      payload: {
        text: 'Sleep',
      },
    }
    expect(actual).toEqual(expected)
  })
})
