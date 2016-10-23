import React, {Component, PropTypes} from 'react';
import {
  CurrentRate,
  Exchange,
} from 'components';
import s from './index.scss';

class Content extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={s.root}>
        <CurrentRate />
        <Exchange />
      </div>
    );
  }
}

Content.propTypes = {};

export default Content;
