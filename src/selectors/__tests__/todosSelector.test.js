import { selectTodos } from '../todosSelector'

describe('todosSelector', () => {
  it('selects all todos', () => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    expect(selectTodos(state)).toEqual({
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    })
  })
})
