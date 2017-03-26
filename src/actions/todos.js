import 'whatwg-fetch'
import { ADD_TODO, FETCH_TODOS_SUCCESS } from './types'

const addTodo = text => ({
  type: ADD_TODO,
  payload: { text },
})

const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { todos },
})

const fetchTodos = () => (dispatch) => {
  const uri = 'http://localhost:3000/api/Todos'
  return fetch(uri, { mode: 'cors' })
  .then((response) => {
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  })
  .then(todos => dispatch(fetchTodosSuccess(todos)))
  .catch(err => console.error(err))
}

export {
  addTodo,
  fetchTodos,
}
