import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

// Sagas
import sagas from '../sagas/index'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(sagas)
  return store
}
