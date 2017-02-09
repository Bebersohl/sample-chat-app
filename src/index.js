import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-log-diff';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, 
  document.getElementById('root')
)
