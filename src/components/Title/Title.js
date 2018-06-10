import React from 'react';
import PropTypes from 'prop-types';

import { title } from './Title.scss';

const Title = ({ text }) => <h2 className={title}>{text}</h2>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
