import React, {Component, PropTypes} from 'react';
import {withInput} from 'containers';
import Arrow from '../Arrow';
import s from './index.scss';

class ExchangeFrom extends Component {

  onClick = (k) => {
    return () => {
      const {changeFromAndFetch} = this.props;
      changeFromAndFetch(k);
    };
  }

  onChange = (ev) => {
    const {changeInput} = this.props;
    changeInput(ev.target.value);
  }

  render() {
    const {from} = this.props;

    return (
      <div className={s.root}>
        <Arrow type="left" onClick={this.onClick(+1)} />
        <div className={s.from}>{from}</div>
        <div><input type="number" onChange={this.onChange} className={s.input} /></div>
        <Arrow type="right" onClick={this.onClick(-1)} />
      </div>
    );
  }
}

ExchangeFrom.propTypes = {
  from: PropTypes.string.isRequired,
  changeFromAndFetch: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default withInput(ExchangeFrom);
