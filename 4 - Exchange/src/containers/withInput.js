import {connect} from 'react-redux';
import {
  changeInput,
  changeFromAndFetch,
  changeTo,
} from 'actions';

export default connect(state => ({
  input: state.input.input,
  from: state.input.from,
  to: state.input.to,
}), {
  changeFromAndFetch,
  changeInput,
  changeTo,
});
