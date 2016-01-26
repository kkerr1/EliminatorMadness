import { compose, createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import DevTool from 'components/devtools';

const historyMiddleware = syncHistory(browserHistory);


export const DevTools = DevTool;

const finalCreateStore = compose(
  applyMiddleware(historyMiddleware, thunk),
  DevTools.instrument()
)(createStore);

export const store = finalCreateStore(reducer);
