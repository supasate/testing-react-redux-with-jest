import React from 'react'
import { shallow } from 'enzyme'
import NewTodo from '../NewTodo'

describe('NewTodo', () => {
  let component
  let props

  beforeEach(() => {
    props = { addTodo: jest.fn() }
    component = shallow(<NewTodo {...props} />)
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

  it('calls props.addTodo when clicking Add button', () => {
    component.setState({ text: 'Hello' })
    component.find('button').simulate('click')

    expect(props.addTodo).toHaveBeenCalledWith('Hello')
  })
})
