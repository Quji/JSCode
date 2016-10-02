import React, {Component} from 'react';
import {
  Content,
  Modal,
} from 'components';
import s from './index.css';

export default class App extends Component {
  render() {
    return (
      <div className={s.root}>
        <Content />
        <Modal />
      </div>
    );
  }
}
