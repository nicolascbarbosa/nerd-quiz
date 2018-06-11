import { INITIAL_STATE, actionTypes as types } from './constants';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        ...action.payload.data,
        oldPagesData: state.oldPagesData.push(state.results),
      };
    default:
      return state;
  }
};
