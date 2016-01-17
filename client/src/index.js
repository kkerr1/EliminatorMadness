import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from 'routes';
import { DevTools, store } from 'store/configure-store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
