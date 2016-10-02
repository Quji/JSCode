import {
  TAB_DEFAULT,
  ALL_MODALS,
  ACTION_OPEN_MODAL,
  ACTION_CLOSE_MODAL,
  ACTION_CHANGE_TAB,
} from 'constants';

const initialState = {
  currentModal: null,
  tabModals: ALL_MODALS[TAB_DEFAULT],
  queue: []
};

export default function tabs(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_OPEN_MODAL: {
      const firstModal = state.tabModals[action.payload.firstModal];
      let newQueue = [firstModal];

      if (action.payload.all) {
        const tabModalsArr = Object.values(state.tabModals);
        newQueue = newQueue.concat(tabModalsArr); // append all modals
        newQueue = [...new Set(newQueue)]; // make unique
      }
      return {
        ...state,
        queue: newQueue
      };
    }
    case ACTION_CHANGE_TAB:
      return {
        ...state,
        tabModals: ALL_MODALS[action.payload]
      };
    case ACTION_CLOSE_MODAL: {
      return {
        ...state,
        queue: state.queue.slice(1),
      };
    }
    default:
      return state;
  }
}
