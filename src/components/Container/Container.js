import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.scss';

const Container = ({ children, flexDirection }) => (
  <div className={styles.container} style={{ flexDirection }}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
};

Container.defaultProps = {
  flexDirection: '',
};

export default Container;
