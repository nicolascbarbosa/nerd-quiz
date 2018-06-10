import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Title, Grid, Container } from '@Components';
import { Card, Timer, Pagination, Photo, Form } from './components';

import styles from './Characters.scss';

class Characters extends React.Component {
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
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
      handleSubmit,
    } = this.props;
    return (
      <Grid backgroundColor="#2A2B30">
        <Container>
          <Grid className={styles.header}>
            <Brand className={styles.brand} />
            <Title text="Nerd Quiz" />
            <Timer onFinish={() => console.log('finish')} />
          </Grid>
          <Grid>
            {characters.map(character => (
              <Card
                key={character.created}
                photo={<Photo wordSearch={character.name} />}
                form={<Form onSubmit={handleSubmit} />}
              />
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
