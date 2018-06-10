import StarWarsClient from '@Client';

import { actionTypes as types } from './constants';

const fetchCharactersSuccess = data => ({
  type: types.FETCH_CHARACTERS_SUCCESS,
  payload: {
    data,
  },
});

const fetchCharactersFaill = () => ({
  type: types.FETCH_CHARACTERS_FAIL,
  payload: {
    title: 'Opsss',
    message: 'Erro ao obter personagens, por favor tente novamente',
  },
});

export const fetchCharacters = () => (dispatch) => {
  dispatch({ type: types.FETCH_CHARACTERS });

  StarWarsClient.Characters.all()
    .then(response => dispatch(fetchCharactersSuccess(response.data())))
    .catch(() => dispatch(fetchCharactersFaill()));
};
