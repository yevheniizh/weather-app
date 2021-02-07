import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaRedo, FaUmbrella, FaWind } from 'react-icons/fa';

import styles from './card.module.scss';

function Card({ city = 'Kiev' }) {
  const [weatherNowIconURL, setWeatherNowIconURL] = useState('');
  const [weatherNowTemperature, setWeatherNowTemperature] = useState('');
  const [weatherNowWindy, setWeatherNowWindy] = useState('');
  const [weatherNowHumidity, setWeatherNowHumidity] = useState('');

  const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;
  const urlWeather = `${REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`;

  useEffect(() => {
    updateData();
  }, []); // eslint-disable-line

  async function updateData() {
    const response = await fetch(urlWeather);
    const data = await response.json();

    const weatherNowIcon = data.weather[0].icon;
    const weatherNowIconURL =
      'http://openweathermap.org/img/wn/' + weatherNowIcon + '@4x.png';
    const weatherNowTemperature = data.main.temp.toFixed(0);
    const weatherNowWindy = data.wind.speed;
    const weatherNowHumidity = data.main.humidity;

    setWeatherNowIconURL(weatherNowIconURL);
    setWeatherNowTemperature(weatherNowTemperature);
    setWeatherNowWindy(weatherNowWindy);
    setWeatherNowHumidity(weatherNowHumidity);
    console.log(data);
  }

  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{city}</h2>

      <div className={styles['card-container']}>
        <div className={styles['card-container__main']}>
          <div className={styles['card-main__item']}>
            <img alt="weatherNowIcon" src={weatherNowIconURL} />
          </div>
          <div
            className={
              (styles['card-main__item'], styles['card-main__item_temperature'])
            }
          >
            {weatherNowTemperature}&deg;
          </div>
        </div>

        <div className={styles['card-container__secondary']}>
          <div className={styles['card-secondary__item']}>
            <div className={styles['card-item__icon']}>
              <FaWind />
            </div>
            <div>{weatherNowWindy}m/s</div>
          </div>

          <div className={styles['card-secondary__item']}>
            <div className={styles['card-item__icon']}>
              <FaUmbrella />
            </div>
            <div>{weatherNowHumidity}%</div>
          </div>
        </div>

        <Button
          className={(styles['button-item'], styles.update)}
          variant="outline-primary"
          type="button"
          onClick={updateData}
        >
          <FaRedo />
          <div>Update</div>
        </Button>

        <Button
          className={(styles['button-item'], styles.remove)}
          variant="outline-secondary"
          type="button"
        >
          <FaTrashAlt />
          <div>Remove</div>
        </Button>
      </div>
    </div>
  );
}

export default Card;
