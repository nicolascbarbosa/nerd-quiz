import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputField.scss';

const InputField = ({ onChange, value, placeholder }) => (
  <div className={styles.control}>
    <input
      className={styles.field}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
};

export default InputField;
