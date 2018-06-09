import { combineReducers } from 'redux';

import orders from '../containers/reducers';

const reducers = combineReducers({
  orders,
});

export default reducers;
