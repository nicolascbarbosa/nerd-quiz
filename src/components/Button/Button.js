import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { btn } from './Button.scss';

const Button = ({ text, className, to }) =>
  (isEmpty(to) ? (
    <button className={[btn, className].join(' ')} type="button">
      {text}
    </button>
  ) : (
    <Link to={to}>{text}</Link>
  ));

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  to: '',
};

export default Button;
