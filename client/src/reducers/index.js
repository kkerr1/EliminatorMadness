import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import dates from 'reducers/dates';
export default combineReducers(Object.assign({
  routes: routeReducer,
  dates
}));
