import 'whatwg-fetch'
import { ADD_TODO_SUCCESS, FETCH_TODOS_SUCCESS } from './types'

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: { ...todo },
})

const addTodo = text => (dispatch) => {
  const uri = 'http://localhost:3000/api/Todos'

  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      text,
    }),
  })
  .then((response) => {
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  })
  .then(todo => dispatch(addTodoSuccess(todo)))
  .catch(err => console.error(err))
}

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
