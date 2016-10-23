import React, {Component, PropTypes} from 'react';
import {withRates} from 'containers';
import s from './index.scss';

class CurrentRate extends Component {

  render() {
    const {currRate} = this.props;

    return (
      <div className={s.root}>{currRate || '\u0000'}</div>
    );
  }
}

CurrentRate.propTypes = {
  currRate: PropTypes.number,
};

export default withRates(CurrentRate);
