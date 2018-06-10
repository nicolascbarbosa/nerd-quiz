import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@Components';

import styles from './Welcome.scss';

class Wecolme extends React.Component {
  render() {
    return (
      <section className={styles.welcome}>
        
        <Container>
          <Link to="/game">Jogar</Link>
        </Container>
      </section>
    );
  }
}

export default Wecolme;
