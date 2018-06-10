import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Title, Grid, Container } from '@Components';
import { Card, Timer, Pagination } from './components';

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

  componentDidMount() {
    this.props.fetchCharacters();
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
            <Timer />
          </Grid>
          <Grid>{characters.map(character => <Card key={character.name} />)}</Grid>
          <Grid>
            <Pagination />
          </Grid>
        </Container>
      </Grid>
    );
  }
}

export default Characters;
