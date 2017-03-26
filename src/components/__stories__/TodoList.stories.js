import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoList from '../TodoList'

storiesOf('TodoList', module)
  .addWithInfo('with todos', 'Show list of TodoItems', () => {
    const todos = [
      { id: 1, text: 'Drink coffee', complete: false },
      { id: 2, text: 'Feed cat', complete: true },
    ]
    return <TodoList todos={todos} fetchTodos={action('fetch todos')} />
  })
  .addWithInfo('empty', 'Show empty todo list', () => (
    <TodoList fetchTodos={action('fetch todos')} />
  ))
