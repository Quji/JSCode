import React, {Component, PropTypes} from 'react';
import {
  withInput,
  withRates
} from 'containers';
import Arrow from '../Arrow';
import s from './index.scss';

class ExchangeTo extends Component {

  onClick = (k) => {
    return () => {
      const {changeTo} = this.props;
      changeTo(k);
    };
  }

  getResult() {
    const {currRate, input} = this.props;
    if(!currRate || !input) {
      return '\u0000';
    }
    return Math.floor(currRate * input * 100, 2) / 100;
  }

  render() {
    const {to} = this.props;

    return (
      <div className={s.root}>
        <Arrow type="left" onClick={this.onClick(+1)} />
        <span className={s.to}>{to}</span>
        <span className={s.result}>{this.getResult()}</span>
        <Arrow type="right" onClick={this.onClick(-1)} />
      </div>
    );
  }
}

ExchangeTo.propTypes = {
  to: PropTypes.string.isRequired,
  input: PropTypes.number,
  currRate: PropTypes.number,
  changeTo: PropTypes.func.isRequired,
};

export default withInput(withRates(ExchangeTo));
