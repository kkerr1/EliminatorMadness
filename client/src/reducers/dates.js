import immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const defaultState = {
  isFetching: false,
  payload: []
};
export default handleActions({
  REQUEST_DATES: (state) => {
    return immutable(state).set('isFetching', true);
  },
  RECEIVE_DATES: (state, action) => {
    // https://github.com/rtfeldman/seamless-immutable/issues/73 - might abandon seamless-immutable
    return immutable(state).merge({
      isFetching: false,
      payload: action.payload
    }).asMutable({deep: true});
  }
}, defaultState);
