import { handleActions } from 'redux-actions';

const defaultState = {
  isFetching: false,
  dates: [],
  currentDate: {}
};
export default handleActions({
  REQUEST_DATES: (state) => {
    return Object.assign({}, state, {isFetching: true});

  },
  RECEIVE_DATES: (state, action) => {
    const dates = action.payload;
    const currentDate = dates.find((date) => date.current);
    return Object.assign({}, state, {
      dates,
      currentDate
    });
  }
}, defaultState);

// http://data.ncaa.com/gametool/brackets/championships/basketball-men/d1/2014/data.json
