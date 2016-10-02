import {connect} from 'react-redux';
import Content from './index';
import {closeModal} from 'actions';

export default connect(state => ({
  modalQueue: state.modal.queue,
}), {
  closeModal,
})(Content);
