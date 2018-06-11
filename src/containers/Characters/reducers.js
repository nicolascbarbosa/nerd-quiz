import { INITIAL_STATE, actionTypes as types } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...action.payload.data,
        results: action.payload.data.results.map(result => ({ ...result, answered: false })),
        oldPagesData: state,
        user: state.user,
      };

    case types.BACK_PAGE:
      return {
        ...state.oldPagesData,
        user: state.user,
      };

    case types.SUBMIT_FORM:
      return {
        ...state,
        results: state.results.map((result, index) =>
          (index === action.payload.index ? { ...result, answered: true } : result)),
        user: {
          ...state.user,
          points: state.user.points + action.payload.points,
        },
      };
    default:
      return state;
  }
};
