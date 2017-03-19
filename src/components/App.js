import React from 'react'
import NewTodo from '../containers/NewTodo'
import TodoList from '../containers/TodoList'

const App = () => (
  <div className="todo-app">
    <NewTodo />
    <TodoList />
  </div>
)

export default App
