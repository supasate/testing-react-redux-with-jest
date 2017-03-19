import React from 'react'
import { shallow } from 'enzyme'
import NewTodo from '../NewTodo'

describe('NewTodo', () => {
  let component
  let props

  beforeEach(() => {
    component = shallow(<NewTodo />)
  })

  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(component.is('div')).toBe(true)
    expect(component.hasClass('new-todo')).toBe(true)
    expect(component.find('input').length).toBe(1)
    expect(component.find('button').length).toBe(1)
    expect(component.find('button').first().hasClass('btn'))
    expect(component.find('button').first().hasClass('btn-primary'))
  })

  it('changes state when typing', () => {
    component.find('input').simulate('change', {
      target: {
        value: 'Hello',
      },
    })

    expect(component.state('text')).toBe('Hello')
  })
})
