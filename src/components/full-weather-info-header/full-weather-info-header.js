import React from 'react';
import { Link } from 'react-router-dom';

import styles from './full-weather-info-header.module.scss';

function FullWeatherInfoHeader({ city }) {
  const dayOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const timeOptions = {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  };

  const day = new Date().toLocaleDateString('en-US', dayOptions);
  const time = new Date().toLocaleTimeString('en-US', timeOptions);

  return (
    <div className={styles['full-weather-info-header']}>
      <div>
        <div>{city}</div>
        <div>
          <div>{day}</div>
          <div>{time}</div>
        </div>
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
