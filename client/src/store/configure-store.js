import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import DevTool from 'components/devtools';

const middleware = syncHistory(browserHistory);
const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}));

export const DevTools = DevTool;

const finalCreateStore = compose(
  applyMiddleware(middleware),
  DevTools.instrument()
)(createStore);

export const store = finalCreateStore(reducer);

middleware.listenForReplays(store);
