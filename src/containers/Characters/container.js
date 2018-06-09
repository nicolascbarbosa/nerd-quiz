import connect from 'react-redux';

import actionCreators from './actions';
import Characters from './Characters';

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actionCreators,
)(Characters);
