import React, {Component, PropTypes} from 'react';
import s from './index.scss';

class Arrow extends Component {

  shouldComponentUpdate() {
    return false;
  }

  getText() {
    switch(this.props.type) {
      default:
      case 'left':
        return '\u21D0';
      case 'right':
        return '\u21D2';
    }
  }

  render() {
    const {onClick} = this.props;

    return (
      <div className={s.root} onClick={onClick}>{this.getText()}</div>
    );
  }
}

Arrow.propTypes = {
  type: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Arrow;
