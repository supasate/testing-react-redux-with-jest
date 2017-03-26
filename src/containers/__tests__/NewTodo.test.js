import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import NewTodo from '../NewTodo'
import { ADD_TODO } from '../../actions/types'

describe('NewTodo Container', () => {
  const createStore = configureMockStore()
  let component
  let store

  beforeEach(() => {
    const state = { todos: [] }
    store = createStore(state)
    component = mount(
      <Provider store={store}>
        <NewTodo />
      </Provider>
    ).find('NewTodo')
  })

  it('dispatches ADD_TODO action via props.addTodo', () => {
    component.props().addTodo('Hello')

    const actions = store.getActions()

    const expectedActions = [{
      type: ADD_TODO,
      payload: { text: 'Hello' },
    }]

    expect(actions).toEqual(expectedActions)
  })
})
