import {ACTION_CHANGE_TAB} from 'constants';

export function changeTab(newTab) {
  return {
    type: ACTION_CHANGE_TAB,
    payload: newTab,
  }
}
