import { ADD_TODO } from '../actions/types'

const initialState = []
let nextId = 1

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      nextId += 1

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
