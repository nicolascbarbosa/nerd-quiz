import { connect } from 'react-redux';

import * as actionCreators from './actions';
import Characters from './Characters';

const mapStateToProps = state => ({
  characters: state.screens.characters.characters,
  movies: state.screens.characters.movies,
  planets: state.screens.characters.planets,
  species: state.screens.characters.species,
  vehicles: state.screens.characters.vehicles,
});

export default connect(
  mapStateToProps,
  actionCreators,
)(Characters);
