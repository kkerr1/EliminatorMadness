import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import DevTool from 'components/devtools';

const historyMiddleware = syncHistory(browserHistory);
const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}));

export const DevTools = DevTool;

const finalCreateStore = compose(
  applyMiddleware(historyMiddleware, thunk),
  DevTools.instrument()
)(createStore);

export const store = finalCreateStore(reducer);

historyMiddleware.listenForReplays(store);
