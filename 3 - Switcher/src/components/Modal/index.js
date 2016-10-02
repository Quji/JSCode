import React, {Component, PropTypes} from 'react';
import s from './index.css';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.currModal = null;
  }

  componentWillReceiveProps(nextProps) {
    this.currModal = nextProps.modalQueue[0] || null;
  }

  componentDidUpdate() {
    if(this.currModal) {
      document.addEventListener('click', this.handleClickOutside, false);
    }
    else {
      document.removeEventListener('click', this.handleClickOutside, false);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (ev) => {
    if(!this.modal) {
     return;
    }
    if (this.modal.contains(ev.target)) {
     return;
    }

    this.closeModal();
  }

  closeModal = () => {
    this.props.closeModal();
  }

  render() {
    if(!this.currModal) {
      return null;
    }

    return (
      <div className={s.root}>
        <div className={s.backdrop} />
        <div className={s.modal} ref={(ref) => this.modal = ref}>
          <h2>{this.currModal.title}</h2>
          <div className={s.content}>{this.currModal.content}</div>
          <div className={s.close} onClick={this.closeModal}>&times;</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalQueue: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};
