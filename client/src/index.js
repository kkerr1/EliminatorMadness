import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import App from './containers/app';
import Home from './containers/home';
import Standings from './containers/standings';

import createHistory from 'history/lib/createHashHistory';

const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}));
const browserHistory = createHistory();
// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
       <Route path="standings" component={Standings} />
       <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
