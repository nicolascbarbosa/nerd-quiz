export const actionTypes = {
  FETCH_CHARACTERS: 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_FAIL: 'FETCH_CHARACTERS_FAIL',
  FETCH_CHARACTERS_SUCCESS: 'FETCH_CHARACTERS_SUCCESS',

  FETCH_CHARACTER_DETAILS: 'FETCH_CHARACTER_DETAILS',

  FETCH_CHARACTERS_PAGE: 'FETCH_CHARACTERS_PAGE',
  BACK_PAGE: 'BACK_PAGE',

  SUBMIT_FORM: 'SUBMIT_FORM',
};

export const INITIAL_STATE = {
  results: [],
  previous: '',
  next: '',
  initCounterCharacther: 0,
  oldPagesData: {},
  user: {
    points: 0,
  },
};
