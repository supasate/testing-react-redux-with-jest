import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo =>
          <TodoItem key={todo.id} {...todo} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes)).isRequired,
  fetchTodos: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
