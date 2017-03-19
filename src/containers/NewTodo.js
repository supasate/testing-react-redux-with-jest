import { connect } from 'react-redux'
import NewTodo from '../components/NewTodo'
import { addTodo } from '../actions/todos'

export default connect(null, { addTodo })(NewTodo)
