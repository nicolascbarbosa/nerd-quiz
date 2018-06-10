import React from 'react';
import PropTypes from 'prop-types';
import GoogleImages from 'google-images';

/* eslint-disable import/no-extraneous-dependencies */
import Logo from '@Images/nicolas.png';

import styles from './Photo.scss';

class Photo extends React.Component {
  static propTypes = {
    wordSearch: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { wordSearch } = this.props;
    // const client = new GoogleImages('CSE ID', 'API KEY');
    // client.search(wordSearch).then(images => console.log(images));
  }

  render() {
    return <img className={styles.photo} src={Logo} alt="tests" />;
  }
}

export default Photo;
