import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@Components';

import styles from './Pagination.scss';

const Pagination = () => (
  <div className={styles.pagination}>
    <Button className={styles.btn} text="< Anterior" />
    <Button className={styles.btn} text="Próxima >" />
  </div>
);

Pagination.propTypes = {};

export default Pagination;
