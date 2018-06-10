import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof global.window === 'object' && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const persistedState = global.window.localStorage.getItem('store') || {};

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
