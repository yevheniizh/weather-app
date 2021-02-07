import React, { useEffect, useState } from 'react';

function Card({ city = 'Kiev' }) {
  const [weatherNowIconURL, setWeatherNowIconURL] = useState('');
  const [weatherNowDescription, setWeatherNowDescription] = useState('');
  const [weatherNowTemperature, setWeatherNowTemperature] = useState('');

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
    const weatherNowDescription = data.weather[0].description;
    weatherNowDescription[0].toUpperCase();

    const weatherNowTemperature = data.main.temp;

    setWeatherNowDescription(weatherNowDescription);
    setWeatherNowIconURL(weatherNowIconURL);
    setWeatherNowTemperature(weatherNowTemperature);
    console.log(data);
  }

  return (
    <div>
      <h1>{city}</h1>
      <img alt="weatherNowIcon" src={weatherNowIconURL} />
      <div>{weatherNowTemperature}</div>
      <div>{weatherNowDescription}</div>
      <button type="button" onClick={updateData}>
        Update
      </button>
    </div>
  );
}

export default Card;
