import { combineReducers } from 'redux';

import { reducers as characters } from './Characters';
import { reducers as welcome } from './Welcome';

const reducers = combineReducers({
  characters,
  welcome,
});

export default reducers;
