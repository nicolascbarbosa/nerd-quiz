import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Card.scss';

const Card = ({ photo, form, answered }) => (
  <figure
    className={cn(styles.card, {
      [styles.answered]: !!answered,
    })}
  >
    {photo}
    <figcaption className={styles.form}>{form}</figcaption>
  </figure>
);

Card.propTypes = {
  photo: PropTypes.node.isRequired,
  form: PropTypes.node.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default Card;
