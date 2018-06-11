import React from 'react';
import PropTypes from 'prop-types';

import { Title, Button } from '@Components';

import styles from './Finish.scss';

const Finish = ({ totalPoints, hideFinish }) => (
  <div className={styles.finish}>
    <Title className={styles.title} text="Game Finalizado" />
    <Button className={styles.btnClose} text="X" onClick={hideFinish} />
    <p className={styles.points}>Seu total de pontos foi: {totalPoints}</p>
  </div>
);

Finish.propTypes = {
  totalPoints: PropTypes.number.isRequired,
  hideFinish: PropTypes.func.isRequired,
};

export default Finish;
