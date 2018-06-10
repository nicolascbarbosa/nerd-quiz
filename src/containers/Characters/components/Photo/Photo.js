import React from 'react';
import PropTypes from 'prop-types';

import GoogleImages from 'google-images';

class Photo extends React.Component {
  static propTypes = {
    wordSearch: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { wordSearch } = this.props;
    const client = new GoogleImages('CSE ID', 'API KEY');
    client.search(wordSearch).then(images => console.log(images));
  }
}

export default Photo;
