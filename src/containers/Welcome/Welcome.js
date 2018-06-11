import React from 'react';

import { Grid, Container, Brand, Title, Button } from '@Components';

import { Explanation } from './components';
import { EXPLANATION } from './constants';

import styles from './Welcome.scss';

export default () => (
  <Grid backgroundColor="#2A2B30">
    <Container flexDirection="column">
      <Brand className={styles.brand} />
      <Title className={styles.title} text="Nerd Quiz" />
      <Explanation text={EXPLANATION} />
      <Button className={styles.btn} text="Jogar" to="/game" />
    </Container>
  </Grid>
);
