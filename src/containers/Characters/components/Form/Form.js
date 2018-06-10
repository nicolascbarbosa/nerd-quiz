import React from 'react';
import PropTypes from 'prop-types';

import { InputField, Button } from '@Components';

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
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
    const { value } = this.state;

    if (!value) {
      e.preventDefault();
      this.props.onSubmit(value);
    }
  }

  handleAnswer() {
    this.setState({
      wantToAnswer: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button text="?" />
        <Button text="..." onClick={() => this.handleAnswer()} />
        {this.state.wantToAnswer && (
          <form onSubmit={this.handleSubmit}>
            <InputField />
          </form>
        )}
      </React.Fragment>
    );
  }
}

export default Form;
