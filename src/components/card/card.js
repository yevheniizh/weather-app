import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeCity, updateCity } from '../../redux/actions';

import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaRedo, FaUmbrella, FaWind } from 'react-icons/fa';

import styles from './card.module.scss';

function Card({ city, info, onClickRemoveCity, onClickUpdateCity }) {
  const { humidity, speed, icon } = info;

  const temperature = info.temp.toFixed(0);
  const iconURL = 'http://openweathermap.org/img/wn/' + icon + '@4x.png';

  const handleRemoveCity = (event) => {
    event.preventDefault();
    onClickRemoveCity(city);
  };

  const handleUpdateCity = (event) => {
    event.preventDefault();
    onClickUpdateCity(city);
  };

  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{city}</h2>

      <div className={styles['card-info']}>
        <div className={styles['card-info__main']}>
          <div className={styles['card-info__main_img']}>
            <img alt="weather now icon" src={iconURL} />
          </div>
          <div className={styles['card-info__main_temperature']}>
            {temperature}&deg;
          </div>
        </div>

        <div className={styles['card-info__secondary']}>
          <div className={styles['card-info__secondary-item']}>
            <div className={styles['card-info__secondary-icon']}>
              <FaWind />
            </div>
            <div>{speed}m/s</div>
          </div>

          <div className={styles['card-info__secondary-item']}>
            <div className={styles['card-info__secondary-icon']}>
              <FaUmbrella />
            </div>
            <div>{humidity}%</div>
          </div>
        </div>

        <Button
          className={styles['card-button__update']}
          variant="outline-primary"
          type="button"
          onClickCapture={handleUpdateCity}
        >
          <FaRedo />
          <div className={styles['card-button__update_description']}>
            Update
          </div>
        </Button>

        <Button
          className={styles['card-button__remove']}
          variant="outline-secondary"
          type="button"
          onClickCapture={handleRemoveCity}
        >
          <FaTrashAlt />
          <div className={styles['card-button__remove_description']}>
            Remove
          </div>
        </Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  info: PropTypes.shape({
    humidity: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  }).isRequired,
  city: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClickRemoveCity: (city) => dispatch(removeCity(city)),
  onClickUpdateCity: (city) => dispatch(updateCity(city)),
});

export default connect(null, mapDispatchToProps)(Card);
