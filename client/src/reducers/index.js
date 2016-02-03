import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import dates from 'reducers/dates';
export default combineReducers(Object.assign({
  routes: routeReducer,
  dates
}));
