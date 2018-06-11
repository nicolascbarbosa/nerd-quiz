import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Title, Grid, Container, Modal } from '@Components';
import { CharacterImageName } from '@Utils';

import { Card, Timer, Pagination, Photo, Form, Details, Finish } from './components';

import styles from './Characters.scss';

class Characters extends React.Component {
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    fetchVehicles: PropTypes.func.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    fetchSpecies: PropTypes.func.isRequired,
    fetchPlanets: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    fetchMorePage: PropTypes.func.isRequired,
    backPage: PropTypes.func.isRequired,
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
      count: PropTypes.number,
      next: PropTypes.string,
      previous: PropTypes.string,
      user: PropTypes.object,
    }).isRequired,
    movies: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    planets: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    species: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    vehicles: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      finishGame: false,
      helpedInfo: {},
    };

    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.handleFinishGame = this.handleFinishGame.bind(this);
  }

  componentDidMount() {
    this.props.fetchCharacters();
    this.props.fetchVehicles();
    this.props.fetchMovies();
    this.props.fetchSpecies();
    this.props.fetchPlanets();
  }

  handleShowDetails(character = {}) {
    this.setState({
      showDetails: !this.state.showDetails,
      helpedInfo: character,
    });
  }

  handleFinishGame() {
    this.setState({
      finishGame: !this.state.finishGame,
    });
  }

  render() {
    const {
      handleSubmit,
      fetchMorePage,
      backPage,
      characters: {
        previous,
        next,
        results: characters,
        user: { points: totalPoints },
      },
      movies,
      planets,
      species,
      vehicles,
    } = this.props;
    return (
      <Grid backgroundColor="#2A2B30">
        <Container>
          <Grid className={styles.header}>
            <Brand className={styles.brand} />
            <Title text="Nerd Quiz" />
            <Timer onFinish={() => this.handleFinishGame()} />
          </Grid>
          <Grid>
            {characters.map((character, index) => (
              <Card
                key={character.url}
                answered={character.answered}
                photo={<Photo imageName={CharacterImageName(character.url)} />}
                form={
                  <Form
                    onSubmit={(value, points) => handleSubmit(character.name, value, points, index)}
                    showDetails={() => this.handleShowDetails(character)}
                  />
                }
              />
            ))}
          </Grid>
          <Grid>
            <Pagination
              previous={previous}
              next={next}
              fetchMorePage={fetchMorePage}
              backPage={backPage}
            />
          </Grid>
          {this.state.showDetails && (
            <Modal>
              <Details
                hideDetails={this.handleShowDetails}
                details={{
                  character: this.state.helpedInfo,
                  movies: movies.results,
                  planets: planets.results,
                  species: species.results,
                  vehicles: vehicles.results,
                }}
              />
            </Modal>
          )}
          {this.state.finishGame && (
            <Modal>
              <Finish totalPoints={totalPoints} />
            </Modal>
          )}
        </Container>
      </Grid>
    );
  }
}

export default Characters;
