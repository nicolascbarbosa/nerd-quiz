import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { Button } from '@Components';

import styles from './Pagination.scss';

const Pagination = ({
  previous, next, fetchMorePage, backPage,
}) => (
  <div className={styles.pagination}>
    <Button
      className={styles.btn}
      text="< Anterior"
      disabled={isEmpty(previous)}
      onClick={() => backPage()}
    />
    <Button
      className={styles.btn}
      text="Próxima >"
      disabled={isEmpty(next)}
      onClick={() => fetchMorePage(next)}
    />
  </div>
);

Pagination.propTypes = {
  fetchMorePage: PropTypes.func.isRequired,
  backPage: PropTypes.func.isRequired,
  previous: PropTypes.string,
  next: PropTypes.string,
};

Pagination.defaultProps = {
  previous: '',
  next: '',
};

export default Pagination;
