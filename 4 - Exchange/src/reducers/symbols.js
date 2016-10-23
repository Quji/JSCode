import {
  ACTION_FETCH_SUCCESS,
} from 'constants';

const initialState = {
  all: [],
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_FETCH_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    default:
      return state;
  }
}
