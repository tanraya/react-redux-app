import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore'

// Connection to Firebase
import connection from './api/connection'

// Routes
import routes from './routes/index'

// Actions
import * as actions from './actions/index'

// Redux store
const store = configureStore()

// Load all data
store.dispatch(actions.fetchDepartments())
store.dispatch(actions.fetchEmployees())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
