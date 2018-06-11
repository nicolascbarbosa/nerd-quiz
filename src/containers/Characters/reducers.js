import { INITIAL_STATE, actionTypes as types } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...action.payload.data,
        oldPagesData: state,
      };

    case types.BACK_PAGE:
      return state.oldPagesData;
    default:
      return state;
  }
};
