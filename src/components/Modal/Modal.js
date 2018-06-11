import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    global.document.body.classList.toggle('modalVisible');
  }

  componentWillUnmount() {
    global.document.body.classList.remove('modalVisible');
  }

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.overlay}>
        <div className={styles.content}>{children}</div>
      </div>,
      global.document.getElementById('modal'),
    );
  }
}

export default Modal;
