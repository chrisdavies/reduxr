import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import actions from './actions/index'
import objActions from 'reduxr-obj-actions'

let store = createStore(todoApp)

// This is hacky, and is not necessary, but doing this
// prevents us from having to pass actions down through
// each container...
store.dispatch.actions = objActions(store.dispatch, actions);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
