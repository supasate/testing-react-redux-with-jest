import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import NewTodo from '../../containers/NewTodo'
import TodoList from '../../containers/TodoList'

describe('App', () => {
  let component

  beforeEach(() => {
    component = shallow(<App />)
  })

  it('mathces its snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('uses correct containers', () => {
    expect(component.find(NewTodo).exists()).toBe(true)
    expect(component.find(TodoList).exists()).toBe(true)
  })
})
