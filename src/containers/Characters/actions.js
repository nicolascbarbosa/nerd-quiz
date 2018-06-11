import { isEmpty } from 'lodash';
import StarWarsClient from '@Client';
import { CharacterNameFormat } from '@Utils';

import { actionTypes as types } from './constants';

const fetchNextPage = (next, success, fail) => dispatch =>
  fetch(next)
    .then(response => response.json())
    .then(result => dispatch(success(result)))
    .catch(() => dispatch(fail()));

const fetchPlanetsFail = () => ({
  type: types.FETCH_PLANETS_FAIL,
  payload: {
    title: 'Opsss',
    message: 'Erro ao obter planetas, por favor tente novamente',
  },
});

const fetchPlanetsSuccess = data => (dispatch) => {
  if (!isEmpty(data.next)) {
    dispatch(fetchNextPage(data.next, fetchNextPage, fetchPlanetsFail));
  }
  dispatch({
    type: types.FETCH_PLANETS_SUCCESS,
    payload: {
      data,
    },
  });
};

export const fetchPlanets = () => (dispatch) => {
  dispatch({ type: types.FETCH_PLANETS });

  StarWarsClient.Planets.all()
    .then(response => dispatch(fetchPlanetsSuccess(response.data())))
    .catch(() => dispatch(fetchPlanetsFail()));
};

const fetchSpeciesFail = () => ({
  type: types.FETCH_SPECIES_FAIL,
  payload: {
    title: 'Opsss',
    message: 'Erro ao obter especies, por favor tente novamente',
  },
});

const fetchSpeciesSuccess = data => (dispatch) => {
  if (!isEmpty(data.next)) {
    dispatch(fetchNextPage(data.next, fetchSpeciesSuccess, fetchSpeciesFail));
  }
  dispatch({
    type: types.FETCH_SPECIES_SUCCESS,
    payload: {
      data,
    },
  });
};

export const fetchSpecies = () => (dispatch) => {
  dispatch({ type: types.FETCH_SPECIES });

  StarWarsClient.Species.all()
    .then(response => dispatch(fetchSpeciesSuccess(response.data())))
    .catch(() => dispatch(fetchSpeciesFail()));
};

const fetchMoviesFail = () => ({
  type: types.FETCH_MOVIES_FAIL,
  payload: {
    title: 'Opsss',
    message: 'Erro ao obter filmes, por favor tente novamente',
  },
});

const fetchMoviesSuccess = data => (dispatch) => {
  if (!isEmpty(data.next)) {
    dispatch(fetchNextPage(data.next, fetchMoviesSuccess, fetchMoviesFail));
  }

  dispatch({
    type: types.FETCH_MOVIES_SUCCESS,
    payload: {
      data,
    },
  });
};

export const fetchMovies = () => (dispatch) => {
  dispatch({ type: types.FETCH_MOVIES });

  StarWarsClient.Movies.all()
    .then(response => dispatch(fetchMoviesSuccess(response.data())))
    .catch(() => dispatch(fetchMoviesFail()));
};

const fetchVehiclesFail = () => ({
  type: types.FETCH_VEHICLES_FAIL,
  payload: {
    title: 'Opsss',
    message: 'Erro ao obter filmes, por favor tente novamente',
  },
});

const fetchVehiclesSuccess = data => (dispatch) => {
  if (!isEmpty(data.next)) {
    dispatch(fetchNextPage(data.next, fetchVehiclesSuccess, fetchVehiclesFail));
  }

  dispatch({
    type: types.FETCH_VEHICLES_SUCCESS,
    payload: {
      data,
    },
  });
};

export const fetchVehicles = () => (dispatch) => {
  dispatch({ type: types.FETCH_VEHICLES });

  StarWarsClient.Vehicles.all()
    .then(response => dispatch(fetchVehiclesSuccess(response.data())))
    .catch(() => dispatch(fetchVehiclesFail()));
};

const fetchCharactersSuccess = data => ({
  type: types.FETCH_CHARACTERS_SUCCESS,
  payload: {
    data,
  },
});

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

export const handleSubmit = (name, value, points, index) => {
  if (CharacterNameFormat(name) === CharacterNameFormat(value)) {
    return {
      type: types.SUBMIT_FORM,
      payload: {
        points,
        index,
      },
    };
  }

  return {
    type: types.SUBMIT_FORM,
    payload: {
      points: 0,
    },
  };
};
