import { REQUEST_DATES, RECEIVE_DATES } from 'actions/dates';
const defaultState = {
  isFetch: false,
  payload: []
};
export default (state = defaultState, action) => {
  switch (action.type) {
  case REQUEST_DATES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_DATES:
    return Object.assign({}, state, {
      isFetching: false,
      payload: action.payload
    });
  default:
    return state;
  }

};
