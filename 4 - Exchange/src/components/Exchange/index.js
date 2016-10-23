import React, {Component, PropTypes} from 'react';
import From from './From';
import To from './To';
import s from './index.scss';

class Exchange extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={s.root}>
        <From />
        <To />
      </div>
    );
  }
}

Exchange.propTypes = {};

export default Exchange;
