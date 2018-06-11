import React from 'react';
import PropTypes from 'prop-types';

import styles from './Explanation.scss';

const Explanation = ({ text }) => <p className={styles.explanation}>{text}</p>;

Explanation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Explanation;
