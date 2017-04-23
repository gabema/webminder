import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './components/App';
import webMinderApp from './reducers'

// http://redux.js.org/docs/basics/ExampleTodoList.html

let store = createStore(webMinderApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
