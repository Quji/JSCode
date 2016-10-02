import {connect} from 'react-redux';
import Content from './index';
import {
  changeTab,
  openModal,
} from 'actions';

export default connect(state => ({
  currTab: state.tabs.currTab,
  allTabs: state.tabs.allTabs,
  tabModals: state.modal.tabModals,
  openAll: state.modal.openAll,
}), {
  changeTab,
  openModal,
})(Content);
