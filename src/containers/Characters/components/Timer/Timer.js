import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import Icon from '@Images/wall-clock.svg';

import styles from './Timer.scss';

const Timer = () => (
  <div className={styles.timer}>
    <img className={styles.icon} src={Icon} alt="ícone relógio" />
    <span className={styles.counter}>00:00s</span>
  </div>
);

export default Timer;
