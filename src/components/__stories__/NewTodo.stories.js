import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import NewTodo from '../NewTodo'

storiesOf('NewTodo', module)
  .addWithInfo('', 'For creating a new todo', () => (
    <NewTodo addTodo={action('calls props.addTodo')} />
  ))
