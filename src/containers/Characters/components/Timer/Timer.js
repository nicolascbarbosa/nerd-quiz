import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable import/no-extraneous-dependencies */
import Icon from '@Images/wall-clock.svg';

import styles from './Timer.scss';

class Timer extends React.Component {
  static propTypes = {
    onFinish: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      timer: '02:00',
    };
  }

  componentDidMount() {
    let timer = 60 * 2;
    this.timer = setInterval(() => {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      timer -= 1;

      if (timer < 0) {
        clearInterval(this.timer);
        this.props.onFinish();
      }

      this.setState({ timer: `${minutes}:${seconds}` });
    }, 1000);
  }

  componentWillUmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={styles.timer}>
        <img className={styles.icon} src={Icon} alt="ícone relógio" />
        <span className={styles.counter}>{this.state.timer}</span>
      </div>
    );
  }
}

export default Timer;
