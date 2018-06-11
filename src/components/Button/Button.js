import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import cn from 'classnames';

import styles from './Button.scss';

const Button = ({
  text, className, to, disabled, onClick,
}) =>
  (isEmpty(to) ? (
    <button
      className={cn(styles.btn, className, {
        [styles.disabled]: !!disabled,
      })}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  ) : (
    <Link
      className={cn(styles.btn, className, {
        [styles.disabled]: !!disabled,
      })}
      to={to}
    >
      {text}
    </Link>
  ));

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  to: '',
  disabled: false,
};

export default Button;
