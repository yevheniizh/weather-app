import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { removeCity } from '../../redux/actions';

import { Button } from 'react-bootstrap';
import { FaTrashAlt, FaRedo, FaUmbrella, FaWind } from 'react-icons/fa';

import styles from './card.module.scss';

function Card({ city = 'Kiev', onClickRemoveCity }) {
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
  }

  async function updateData2(event) {
    event.preventDefault();
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
  }

  const handleRemoveCity = (event) => {
    event.preventDefault();
    onClickRemoveCity(city);
  };

  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{city}</h2>

      <div className={styles['card-info']}>
        <div className={styles['card-info__main']}>
          <div className={styles['card-info__main_img']}>
            <img alt="weather now icon" src={weatherNowIconURL} />
          </div>
          <div className={styles['card-info__main_temperature']}>
            {weatherNowTemperature}&deg;
          </div>
        </div>

        <div className={styles['card-info__secondary']}>
          <div className={styles['card-info__secondary-item']}>
            <div className={styles['card-info__secondary-icon']}>
              <FaWind />
            </div>
            <div>{weatherNowWindy}m/s</div>
          </div>

          <div className={styles['card-info__secondary-item']}>
            <div className={styles['card-info__secondary-icon']}>
              <FaUmbrella />
            </div>
            <div>{weatherNowHumidity}%</div>
          </div>
        </div>

        <Button
          className={styles['card-button__update']}
          variant="outline-primary"
          type="button"
          onClickCapture={updateData2}
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

const mapDispatchToProps = (dispatch) => ({
  onClickRemoveCity: (city) => dispatch(removeCity(city)),
});

export default connect(null, mapDispatchToProps)(Card);
