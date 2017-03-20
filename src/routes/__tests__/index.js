import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import Routes from '../../routes'

jest.mock('../../components/Login')
jest.mock('../../components/App')
describe('Routes', () => {
  it('renders App if path is /', () => {
    const component = mount(
      <Router initialEntries={['/']}>
        <Routes />
      </Router>
    )
    expect(component.text()).toEqual('App')
  })
  it('renders Login if path is /login', () => {
    const component = mount(
      <Router initialEntries={['/login']}>
        <Routes />
      </Router>
    )
    expect(component.text()).toEqual('Login')
  })
})
