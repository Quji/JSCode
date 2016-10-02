import React, {Component, PropTypes} from 'react';
import {Tabs} from 'components';
import s from './index.css';

export default class Content extends Component {
  onOpenModal = () => {
    const firstModal = this.select.value;
    const openAll = this.checkbox.checked;
    this.props.openModal(firstModal, openAll);
  }

  renderOption = (key) => {
    const modal = this.props.tabModals[key];
    return (
      <option key={key} value={key}>{modal.title}</option>
    );
  }

  renderOpener() {
    const options = Object.keys(this.props.tabModals).map(this.renderOption);

    return (
      <div className={s.opener}>
        <select ref={(ref) => this.select = ref}>{options}</select>
        <button onClick={this.onOpenModal} className={s.button}>OPEN</button>
      </div>
    );
  }

  render() {
    const {
      allTabs,
      currTab,
    } = this.props;

    const tabsProps = {
      ...this.props
    };

    return (
      <div className={s.root}>
        <Tabs {...tabsProps}/>
        <h1 className={s.h1}>{allTabs[currTab].content}</h1>
        <label className={s.checkbox}>
          <input type="checkbox" ref={(ref) => this.checkbox = ref} />&nbsp;Open all popups
        </label>
        {this.renderOpener()}
      </div>
    );
  }
}

Content.propTypes = {
  currTab: PropTypes.string.isRequired,
  allTabs: PropTypes.object.isRequired,
  tabModals: PropTypes.object.isRequired,
  changeTab: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
