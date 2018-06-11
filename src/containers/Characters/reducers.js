import { merge } from 'lodash';
import { INITIAL_STATE, actionTypes as types } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: {
          ...action.payload.data,
          results: action.payload.data.results.map(result => ({ ...result, answered: false })),
          oldPagesData: state.characters,
          user: state.characters.user,
        },
      };

    case types.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: merge({}, state.planets, action.payload.data),
      };

    case types.FETCH_SPECIES_SUCCESS:
      return {
        ...state,
        species: merge({}, state.species, action.payload.data),
      };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: merge({}, state.movies, action.payload.data),
      };

    case types.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: merge({}, state.vehicles, action.payload.data),
      };

    case types.BACK_PAGE:
      return {
        ...state.oldPagesData,
        user: state.user,
      };

    case types.SUBMIT_FORM:
      return {
        ...state,
        characters: {
          ...state.characters,
          results: state.characters.results.map((result, index) =>
            (index === action.payload.index ? { ...result, answered: true } : result)),
          user: {
            ...state.characters.user,
            points: state.characters.user.points + action.payload.points,
          },
        },
      };
    default:
      return state;
  }
};
