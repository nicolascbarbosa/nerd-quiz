import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { InputField, Button } from '@Components';

import styles from './Form.scss';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    showDetails: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { value: '', wantToAnswer: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { value } = this.state;

    if (!value) {
      this.props.onSubmit(value);
    }
  }

  handleAnswer() {
    this.setState({
      wantToAnswer: !this.state.wantToAnswer,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button text="?" onClick={this.props.showDetails} />
        <Button
          text="..."
          className={cn({
            [styles.btnActive]: !!this.state.wantToAnswer,
          })}
          onClick={this.handleAnswer}
        />

        {this.state.wantToAnswer && (
          <div className={styles.formBox}>
            <form onSubmit={this.handleSubmit}>
              <InputField
                onChange={this.handleChange}
                value={this.state.value}
                placeholder="Digite o nome do personagem"
              />
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Form;
