import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable import/no-extraneous-dependencies */
import Logo from '@Images/nicolas.png';

const Brand = ({ className }) => <img className={className} src={Logo} alt="logo nerd" />;

Brand.propTypes = {
  className: PropTypes.string,
};

Brand.defaultProps = {
  className: '',
};

export default Brand;
