import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from '@Components';

class Wecolme extends React.Component {
  render() {
    return (
      <section className={styles.welcome}>
        <Link to="/game">Jogar</Link>
      </section>
    );
  }
}

export default Wecolme;
