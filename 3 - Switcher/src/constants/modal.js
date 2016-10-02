import {
  TAB_USERS, TAB_STATISTICS
} from 'constants';

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';

export const POPUP_11 = 'POPUP_11';
export const POPUP_12 = 'POPUP_12';
export const POPUP_21 = 'POPUP_21';
export const POPUP_22 = 'POPUP_22';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const ALL_MODALS = {
  [TAB_USERS]: {
    [POPUP_11]: {
      title: 'Pop up 11',
      content: content,
    },
    [POPUP_12]: {
      title: 'Pop up 12',
      content: content,
    },
  },
  [TAB_STATISTICS]: {
    [POPUP_21]: {
      title: 'Pop up 21',
      content: content,
    },
    [POPUP_22]: {
      title: 'Pop up 22',
      content: content,
    },
  },
};
