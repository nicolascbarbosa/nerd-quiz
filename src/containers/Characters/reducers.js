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
        planets: {
          ...action.payload.data,
          results: [...state.planets.results, ...action.payload.data.results],
        },
      };

    case types.FETCH_SPECIES_SUCCESS:
      return {
        ...state,
        species: {
          ...action.payload.data,
          results: [...state.species.results, ...action.payload.data.results],
        },
      };

    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...action.payload.data,
          results: [...state.movies.results, ...action.payload.data.results],
        },
      };
    case types.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: {
          ...action.payload.data,
          results: [...state.vehicles.results, ...action.payload.data.results],
        },
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
