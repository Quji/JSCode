import React, {Component, PropTypes} from 'react';
import cn from 'classNames';
import s from './index.css';

export default class Tabs extends Component {
  onClick = (ev) => {
    const key = ev.currentTarget.getAttribute('data-key');
    this.props.changeTab(key);
    ev.preventDefault();
  }

  renderTab = (key) => {
    const className = cn(s.tab, {
      [s.active]: this.props.currTab === key
    });
    return (
      <a
        href="#"
        data-key={key}
        key={key}
        onClick={this.onClick}
        className={className}>{this.props.allTabs[key].title}</a>
    );
  }

  render() {
    const {
      allTabs,
    } = this.props;
    return (
      <div className={s.root}>
        {Object.keys(allTabs).map(this.renderTab)}
      </div>
    );
  }
}

Tabs.propTypes = {
  currTab: PropTypes.string.isRequired,
  allTabs: PropTypes.object.isRequired,
  changeTab: PropTypes.func.isRequired,
};
