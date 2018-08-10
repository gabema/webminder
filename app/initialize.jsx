import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import webMinderApp from './reducers';
import App from './components/App';

const store = createStore(
  webMinderApp,
//  module.hot && module.hot.data && (module.hot.data.counter || 0),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState(); // eslint-disable-line
    [].slice.apply(document.querySelector('#app').children).forEach(c => c.remove());
  });
}

const load = () => render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
