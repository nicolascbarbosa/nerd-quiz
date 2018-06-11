import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { Button } from '@Components';

import styles from './Pagination.scss';

const Pagination = ({ previous, next }) => (
  <div className={styles.pagination}>
    <Button className={styles.btn} text="< Anterior" disabled={isEmpty(previous)} />
    <Button className={styles.btn} text="Próxima >" disabled={isEmpty(next)} />
  </div>
);

Pagination.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};

Pagination.defaultProps = {
  previous: '',
  next: '',
};

export default Pagination;
