import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  it('matches its snapshot - not complete', () => {
    const component = shallow(<TodoItem text="Hello" />)

    expect(toJson(component)).toMatchSnapshot()
  })

  it('matches its snapshot - complete', () => {
    const component = shallow(<TodoItem text="Hello" complete />)

    expect(toJson(component)).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    const component = shallow(<TodoItem text="Hello" />)

    expect(component.is('li')).toBe(true)
  })

  it('contains complete class if receiving complete prop', () => {
    const component = shallow(<TodoItem text="Hello" complete />)

    expect(component.hasClass('complete')).toBe(true)
  })
})
