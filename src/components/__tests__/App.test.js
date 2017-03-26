import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  let component

  beforeEach(() => {
    component = shallow(<App />)
  })

  it('mathces its snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('uses correct containers', () => {
    expect(component.find('Connect(NewTodo)').exists()).toBe(true)
    expect(component.find('Connect(TodoList)').exists()).toBe(true)
  })
})
