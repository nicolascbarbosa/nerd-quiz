import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

const Card = ({ photo, form }) => (
  <figure className={styles.card}>
    {photo}
    <figcaption className={styles.form}>{form}</figcaption>
  </figure>
);

Card.propTypes = {
  photo: PropTypes.node.isRequired,
  form: PropTypes.node.isRequired,
};

export default Card;
