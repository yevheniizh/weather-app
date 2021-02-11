import React from 'react';
import { Link } from 'react-router-dom';

import TimeContainer from '../time-container';

import styles from './full-weather-info-header.module.scss';

function FullWeatherInfoHeader({ city }) {
  return (
    <div className={styles['full-weather-info-header']}>
      <div className={styles['full-weather-info-header__location']}>
        <div className={styles['full-weather-info-header__location-city']}>
          {city}
        </div>
        <TimeContainer
          className={styles['full-weather-info-header__location-time']}
        />
      </div>
      <div>
        <Link to="/">
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true" className="close-glyphicon">
              &times;
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FullWeatherInfoHeader;
