import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => <div>{text}</div>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
