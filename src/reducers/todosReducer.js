import { ADD_TODO } from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
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
    default:
      return state
  }
}
export default todosReducer
