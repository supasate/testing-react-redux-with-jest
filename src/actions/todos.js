import { ADD_TODO } from './types'

const addTodo = text => ({
  type: ADD_TODO,
  payload: { text },
})

export { addTodo }
