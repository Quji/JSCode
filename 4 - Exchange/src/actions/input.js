import {
  ACTION_CHANGE_INPUT,
  ACTION_CHANGE_FROM,
  ACTION_CHANGE_TO,
} from 'constants';
import {
  fetchRates
} from 'actions';

export function changeInput(input) {
  return {
    type: ACTION_CHANGE_INPUT,
    payload: input,
  }
}

function changeFrom(newFrom) {
  return {
    type: ACTION_CHANGE_FROM,
    payload: newFrom,
  }
}

export function changeFromAndFetch(newFrom) {
  return (dispatch) => {
    dispatch(changeFrom(newFrom));
    dispatch(fetchRates());
  }
}

export function changeTo(newTo) {
  return {
    type: ACTION_CHANGE_TO,
    payload: newTo,
  }
}
