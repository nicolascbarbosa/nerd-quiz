import { connect } from 'react-redux';

import actionCreators from './actions';
import Welcome from './Welcome';

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actionCreators,
)(Welcome);
