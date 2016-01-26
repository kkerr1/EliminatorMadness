export const BASE_URL = 'http://localhost:3001/api';
export const REQUEST_DATES = 'REQUEST_DATES';
export const RECEIVE_DATES = 'RECEIVE_DATES';
export const requestDates = () => {
  return {
    type: REQUEST_DATES
  };
};

export const receiveDates = (payload) => {

  return {
    type: RECEIVE_DATES,
    payload
  };
};

export const fetchDates = () => {
  return function (dispatch, getState) {
    if (getState().dates.payload.length > 0) {
      return;
    }
    dispatch(requestDates());
    fetch(`${BASE_URL}/dates`)
    .then((response) => response.json())
    .then((payload) => dispatch(receiveDates(payload)));
  };
};
