import { connect } from 'react-redux';

import * as actionCreators from './actions';
import Characters from './Characters';

const mapStateToProps = state => ({
  characters: state.screens.characters,
});

export default connect(
  mapStateToProps,
  actionCreators,
)(Characters);
