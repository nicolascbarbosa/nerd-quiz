import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { btn } from './Button.scss';

const Button = ({
  text, className, to, disable,
}) =>
  (isEmpty(to) ? (
    <button className={[btn, className].join(' ')} type="button" {...disable}>
      {text}
    </button>
  ) : (
    <Link to={to}>{text}</Link>
  ));

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  to: '',
  disable: false,
};

export default Button;
