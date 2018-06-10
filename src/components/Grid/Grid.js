import React from 'react';
import PropTypes from 'prop-types';

import styles from './Grid.scss';

const Grid = ({ children, backgroundColor, className }) => (
  <div
    className={[styles.grid, className].join(' ')}
    style={{
      backgroundColor,
    }}
  >
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Grid.defaultProps = {
  backgroundColor: '',
  className: '',
};

export default Grid;
