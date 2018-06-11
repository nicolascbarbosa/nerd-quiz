import React from 'react';
import PropTypes from 'prop-types';

import { Brand, Title, Grid, Container, Modal } from '@Components';
import { CharacterImageName } from '@Utils';

import { Card, Timer, Pagination, Photo, Form, Details } from './components';

import styles from './Characters.scss';

class Characters extends React.Component {
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    fetchMorePage: PropTypes.func.isRequired,
    backPage: PropTypes.func.isRequired,
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.object),
      count: PropTypes.number,
      next: PropTypes.string,
      previous: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      finishGame: false,
    };

    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.handleFinishGame = this.handleFinishGame.bind(this);
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  handleShowDetails() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  handleFinishGame() {
    this.setState({
      finishGame: !this.state.finishGame,
    });
  }

  render() {
    const {
      characters: {
        previous, next, results: characters, details,
      },
      handleSubmit,
      fetchMorePage,
      backPage,
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
            {characters.map(character => (
              <React.Fragment>
                <Card
                  key={character.created}
                  photo={<Photo imageName={CharacterImageName(character.url)} />}
                  form={
                    <Form
                      onSubmit={value => handleSubmit(character.name, value)}
                      showDetails={this.handleShowDetails}
                    />
                  }
                />
                {character.name}
              </React.Fragment>
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
              <Details details={details} />
            </Modal>
          )}
        </Container>
      </Grid>
    );
  }
}

export default Characters;
