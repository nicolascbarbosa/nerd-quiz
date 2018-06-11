import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.scss';

const Photo = ({ imageName }) => (
  <img
    className={styles.photo}
    src={require(`../../../../assets/img/characters/${imageName}.jpg`)}
    alt="tests"
  />
);

Photo.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default Photo;
