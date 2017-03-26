import { ADD_TODO_SUCCESS, FETCH_TODOS_SUCCESS } from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS: {
      const nextId = 1 + state.reduce(
        (max, cur) => Math.max(max, cur.id),
        0
      )

      return [...state, {
        id: nextId,
        text: action.payload.text,
        complete: false,
      }]
    }
    case FETCH_TODOS_SUCCESS: {
      return action.payload.todos
    }
    default:
      return state
  }
}
export default todosReducer
