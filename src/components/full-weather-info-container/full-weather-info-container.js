import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './full-weather-info-container.module.scss';

function FullWeatherInfoContainer({ city }) {
  const [forecastList, setForecastList] = useState(null);

  const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;
  const urlWeather = `${REACT_APP_API_URL}/data/2.5/forecast?q=${city}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`;

  useEffect(() => {
    fetch(urlWeather)
      .then((response) => response.json())
      .then((data) => {
        const oneDayForecast = data.list.slice(0, 8);
        const forecastList = oneDayForecast.reduce((acc, item) => {
          acc[item.dt_txt] = item.main.temp;

          return acc;
        }, {});

        setForecastList(getForecastBody(forecastList));
      })
      .catch((error) => console.log(error));
  }, []); // eslint-disable-line

  const getForecastBody = (data) => {
    const temperatureList = Object.values(data);
    const chartList = Object.entries(data);
    const chartHeight = 100;
    const maxValue = Math.max(...temperatureList);

    const getChartList = chartList
      .map(([time, item]) => {
        const scale = chartHeight / maxValue;
        const percent = ((item / maxValue) * 100).toFixed(0);

        return `<div style="--value: ${Math.floor(
          item * scale
        )}" data-tooltip="${percent}%">
          <div style='--temperature: ${item}'>${item.toFixed(0)}&deg;</div>
          <div>${time.slice(0, -3)}</div>
        </div>`;
      })
      .join('');

    return { __html: getChartList };
  };

  return (
    <div
      dangerouslySetInnerHTML={forecastList}
      className={styles['full-weather-info-container']}
    />
  );
}

FullWeatherInfoContainer.propTypes = {
  city: PropTypes.string.isRequired,
};

export default FullWeatherInfoContainer;
