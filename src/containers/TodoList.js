import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { selectTodos } from '../selectors/todosSelector'
import { fetchTodos } from '../actions/todos'

export default connect(selectTodos, { fetchTodos })(TodoList)
