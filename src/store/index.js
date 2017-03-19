import { createStore as createReduxStore } from 'redux'
import rootReducer from '../reducers'

const createStore = (initialState) => {
  const store = createReduxStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}

export {
  createStore,
}
