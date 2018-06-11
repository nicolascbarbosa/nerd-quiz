import StarWarsClient from '@Client';
import { CharacterNameFormat } from '@Utils';

import { actionTypes as types } from './constants';

const fetchFilms = films => films.map(film => fetch(film).then(response => response.json()));

const fetchHomeWorld = homeworld => fetch(homeworld);

const fetchSpecies = species => species.map(specie => fetch(specie));

const fetchStarships = starships => starships.map(starship => fetch(starship));

const fetchVehicles = vehicles => vehicles.map(vehicle => fetch(vehicle));

const fetchCharacterDetails = data => (dispatch) => {
  dispatch({ type: types.FETCH_CHARACTER_DETAILS });

  data.results.forEach((character) => {
    console.log(fetchFilms(character.films));
  });
};

const fetchCharactersSuccess = data => (dispatch) => {
  dispatch({
    type: types.FETCH_CHARACTERS_SUCCESS,
    payload: {
      data,
    },
  });
  // dispatch(fetchCharacterDetails(data));
};

const fetchCharactersFail = () => ({
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
    .catch(() => dispatch(fetchCharactersFail()));
};

export const fetchMorePage = url => (dispatch) => {
  dispatch({ type: types.FETCH_CHARACTERS_PAGE });

  return fetch(url)
    .then(response => response.json())
    .then(result => dispatch(fetchCharactersSuccess(result)))
    .catch(() => dispatch(fetchCharactersFail()));
};

export const backPage = () => ({
  type: types.BACK_PAGE,
});

export const handleSubmit = (name, value) => {
  if (CharacterNameFormat(name) === CharacterNameFormat(value)) {
  }

  return {
    type: types.SUBMIT_FORM,
  };
};
