import React from 'react';
import PropTypes from 'prop-types';

import { Title, Button } from '@Components';
import { CharacterImageName } from '@Utils';

import { Photo } from './';

import styles from './Details.scss';

const Details = ({ hideDetails, details }) => (
  <div className={styles.details}>
    <Title text="Detalhes do Personagem" />
    <Button text="X" onClick={hideDetails} />

    <div className={styles.about}>
      <Photo imageName={CharacterImageName(details.url)} />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.label}>Especie(s):</span>
          {details.species.map(specie => specie).join(' ')}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Altura:</span>
          {details.height}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Cabelo:</span>
          {details.hair}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Planeta:</span>
          {details.planet}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Filme(s):</span>
          {details.movies.map(movie => movie).join(' ')}
        </li>
        <li className={styles.listItem}>
          <span className={styles.label}>Veiculos(s):</span>
          {details.vehicles.map(vehicle => vehicle).join(' ')}
        </li>
      </ul>
    </div>
  </div>
);

Details.propTypes = {
  hideDetails: PropTypes.func.isRequired,
  details: PropTypes.shape({
    url: PropTypes.string,
    height: PropTypes.string,
    hair: PropTypes.string,
    planet: PropTypes.array,
    species: PropTypes.array,
    movies: PropTypes.array,
    vehicles: PropTypes.array,
  }).isRequired,
};

export default Details;
