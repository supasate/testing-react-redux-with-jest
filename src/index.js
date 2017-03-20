import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Root from './components/Root'
import { createStore } from './store'

const store = createStore()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root)
  })
}
