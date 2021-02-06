import React, { useEffect, useState } from 'react';

function Card({ city = 'Kiev' }) {
  const [info, setInfo] = useState('');
  const [isSending, setIsSending] = useState(false);
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=49932468c0fb5af5071641db054eea3a`;

  useEffect(() => {
    fetch(urlWeather)
      .then((res) => res.json())
      .then((data) => {
        const weatherNow = data.weather[0].description;
        setInfo(weatherNow);
      })
      .catch((err) => setInfo("Can't get info"));
    setIsSending(false);
  }, [isSending]);

  return (
    <div>
      <input type="input" id="input"></input>
      <button type="button" onClick={() => setIsSending(true)}>
        Update info
      </button>

      <h1>{info}</h1>
    </div>
  );
}

export default Card;
