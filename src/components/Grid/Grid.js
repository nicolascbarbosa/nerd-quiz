import React from 'react';
import PropTypes from 'prop-types';

import styles from './Grid.scss';

const Grid = ({ children, backgroundColor }) => (
  <div
    className={styles.grid}
    style={{
      backgroundColor,
    }}
  >
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

Grid.defaultProps = {
  backgroundColor: '',
};

export default Grid;
