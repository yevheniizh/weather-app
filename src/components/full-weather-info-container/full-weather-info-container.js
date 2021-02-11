import React, { useState, useEffect } from 'react';

import styles from './full-weather-info-container.module.scss';

function FullWeatherInfoContainer({ city }) {
  const [forecastList, setForecastList] = useState(null);

  const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;
  const urlWeather = `${REACT_APP_API_URL}/data/2.5/forecast?q=${city}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`;

  useEffect(() => {
    fetch(urlWeather)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const oneDayForecast = data.list.slice(0, 8);
        const forecastList = oneDayForecast.reduce((acc, item) => {
          acc[item.dt_txt] = item.main.temp;

          return acc;
        }, {});

        setForecastList(getForecastBody(forecastList));
      });
  }, []); // eslint-disable-line

  const getForecastBody = (data) => {
    const temperatureList = Object.values(data);
    const chartHeight = 100;
    const maxValue = Math.max(...temperatureList);

    const getTemperatureList = temperatureList
      .map((item) => {
        const scale = chartHeight / maxValue;
        const percent = ((item / maxValue) * 100).toFixed(0);

        return `<div style="--value: ${Math.floor(
          item * scale
        )}" data-tooltip="${percent}%">
          <span className={styles['test2']}>${item.toFixed(0)}&deg;</span>
        </div>`;
      })
      .join('');

    return { __html: getTemperatureList };
  };

  return (
    <div
      dangerouslySetInnerHTML={forecastList}
      className={styles['full-weather-info-container']}
    />
  );
}

export default FullWeatherInfoContainer;
