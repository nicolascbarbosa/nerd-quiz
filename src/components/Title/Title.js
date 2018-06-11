import React from 'react';
import PropTypes from 'prop-types';

import { title } from './Title.scss';

const Title = ({ text, className }) => <h2 className={[title, className].join(' ')}>{text}</h2>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default Title;
