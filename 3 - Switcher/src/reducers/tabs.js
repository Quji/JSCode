import {
  TAB_DEFAULT,
  ACTION_CHANGE_TAB,
  ALL_TABS,
} from 'constants';

const initialState = {
  currTab: TAB_DEFAULT,
  allTabs: ALL_TABS,
};

export default function tabs(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_CHANGE_TAB:
      return {
        ...state,
        currTab: action.payload
      };
    default:
      return state;
  }
}
