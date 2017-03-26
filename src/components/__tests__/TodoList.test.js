import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoList from '../TodoList'

describe('TodoList', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
      fetchTodos: jest.fn(),
    }
    component = shallow(<TodoList {...props} />)
  })

  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(component.is('ul')).toBe(true)
    expect(component.hasClass('todo-list')).toBe(true)
  })

  it('renders TodoItem from props', () => {
    expect(component.find('TodoItem').length)
      .toBe(props.todos.length)
  })

  it('calls props.fetchTodos when mounted', () => {
    component = mount(<TodoList {...props} />)
    expect(props.fetchTodos).toHaveBeenCalled()
  })
})
