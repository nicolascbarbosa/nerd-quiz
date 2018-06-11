import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

import { Title, Button } from '@Components';
import { CharacterImageName } from '@Utils';

import { Photo } from '../';

import styles from './Details.scss';

const Details = ({ hideDetails, details }) => (
  <div className={styles.details}>
    <Title className={styles.title} text="Detalhes do Personagem" />
    <Button className={styles.btnClose} text="X" onClick={hideDetails} />
    <div className={styles.about}>
      <div className={styles.thumb}>
        <Photo imageName={CharacterImageName(details.character.url)} />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Especie(s): </span>
          {details.species
            .filter(specie => includes(details.character.species, specie.url))
            .map(specie => specie.name)}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Altura: </span>
          {details.character.height}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Cor do Cabelo: </span>
          {details.character.hair_color}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Planeta: </span>
          {details.planets
            .filter(planet => planet.url === details.character.homeworld)
            .map(planet => planet.name)}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Filme(s): </span>
          {details.movies
            .filter(movie => includes(details.character.films, movie.url))
            .map(movie => movie.title)}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Veiculos(s): </span>
          {details.vehicles
            .filter(vehicle => includes(details.character.vehicles, vehicle.url))
            .map(vehicle => vehicle.name)}
        </li>
      </ul>
    </div>
  </div>
);

Details.propTypes = {
  hideDetails: PropTypes.func.isRequired,
  details: PropTypes.shape({
    character: PropTypes.object,
    planets: PropTypes.array,
    species: PropTypes.array,
    movies: PropTypes.array,
    vehicles: PropTypes.array,
  }).isRequired,
};

Details.defaulProps = {
  details: {
    character: {
      url: '',
    },
  },
};

export default Details;
