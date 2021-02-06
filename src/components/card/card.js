import React, { useEffect, useState } from 'react';

function Card({ city = 'Kiev' }) {
  const [weatherNowIconURL, setWeatherNowIconURL] = useState('');
  const [weatherNowDescription, setWeatherNowDescription] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;
  const urlWeather = `${REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`;

  useEffect(() => {
    fetch(urlWeather)
      .then((res) => res.json())
      .then((data) => {
        const weatherNowIcon = data.weather[0].icon;
        const weatherNowIconURL =
          'http://openweathermap.org/img/w/' + weatherNowIcon + '.png';
        const weatherNowDescription = data.weather[0].description;

        setWeatherNowDescription(weatherNowDescription);
        setWeatherNowIconURL(weatherNowIconURL);
      })
      .catch((err) => {
        setWeatherNowDescription("Can't get description");
      });
    setIsSending(false);
  }, [isSending]); // eslint-disable-line

  return (
    <div>
      <input type="input" id="input"></input>
      <button type="button" onClick={() => setIsSending(true)}>
        Update info
      </button>
      <img alt="weatherNowIcon" src={weatherNowIconURL} />
      <h1>{weatherNowDescription}</h1>
    </div>
  );
}

export default Card;
