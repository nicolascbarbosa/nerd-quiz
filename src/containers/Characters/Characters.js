import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Title, Grid, Container, InputField, Button } from '@Components';
import { Card, Timer, Pagination, Photo } from './components';

class Characters extends React.Component {
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
      count: PropTypes.number,
      next: PropTypes.string,
      previous: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {
      characters: { results: characters },
    } = this.props;
    return (
      <Grid backgroundColor="#2A2B30">
        <Container>
          <Grid>
            <Brand />
            <Title text="Nerd Quiz" />
            <Timer onFinish={() => console.log('finish')} />
          </Grid>
          <Grid>
            {characters.map(character => (
              <Card key={character.name}>
                <Photo />
                <Button text="?" />
                <Button text="..." />
                <form>
                  <InputField />
                </form>
              </Card>
            ))}
          </Grid>
          <Grid>
            <Pagination />
          </Grid>
        </Container>
      </Grid>
    );
  }
}

export default Characters;
