import {
  ACTION_FETCH_SUCCESS,
  DATA_URL,
} from 'constants';

function fetchSuccess(data) {
  return {
    type: ACTION_FETCH_SUCCESS,
    payload: data
  }
}

export function fetchRates() {
  return function (dispatch, getState) {
    const base  = getState().input.from;

    fetch(DATA_URL + base).then((resp) => {
      return resp.json()
    }).then((json) => {
      dispatch(fetchSuccess(json.rates));
    });
  };
}
