import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs';
import TodoItem from '../TodoItem'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .addWithInfo('not complete', 'Show a todo item when complete prop is blank or false', () => (
    <TodoItem text={text('Text', 'Not complete')} />
  ))
  .addWithInfo('complete', 'Show a todo item when complete prop is provided or true', () => (
    <TodoItem text={text('Text', 'Complete')} complete={boolean('Complete', true)} />
  ))
