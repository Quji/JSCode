import React, {Component, PropTypes} from 'react';
import {Content} from 'components';
import {withRates} from 'containers';
import s from './index.scss';

class App extends Component {

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate() {
    return false;
  }

  fetchData() {
    this.props.fetchRates();

    setTimeout(() => {
      this.fetchData();
    }, 30 * 1000);
  }

  render() {
    return (
      <div className={s.root}>
        <Content />
      </div>
    );
  }
}

App.propTypes = {
  fetchRates: PropTypes.func.isRequired,
};

export default withRates(App);
