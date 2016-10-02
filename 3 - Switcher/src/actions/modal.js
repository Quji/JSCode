import {
  ACTION_OPEN_MODAL,
  ACTION_CLOSE_MODAL,
} from 'constants';

export function openModal(firstModal, all) {
  return {
    type: ACTION_OPEN_MODAL,
    payload: {
      firstModal,
      all,
    },
  }
}

export function closeModal() {
  return {
    type: ACTION_CLOSE_MODAL,
  }
}
