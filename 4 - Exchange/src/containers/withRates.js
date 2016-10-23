import {connect} from 'react-redux';
import {fetchRates} from 'actions';

export default connect((state) => ({
  rates: state.rates.all,
  currRate: state.rates.all[state.input.to] || null,
}), {
  fetchRates
});
