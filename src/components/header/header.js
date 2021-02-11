import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../redux/actions';

import escapeHtml from '../../utils/escape-html';

function Header({ onSubmit }) {
  const [value, setValue] = useState('');

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

  const handleChange = (event) => {
    const inputValue = escapeHtml(event.target.value);
    setValue(inputValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getWeather(value);
  };

  const getWeather = async (inputValue) => {
    const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;
    const urlWeather = `${REACT_APP_API_URL}/data/2.5/weather?q=${inputValue}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`;

    try {
      const response = await fetch(urlWeather);

      if (response.status === 200) {
        let data = await response.json();
        console.log(data);
        onSubmit(inputValue);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      alert(`${err.message}. Please try again`);
    }
  };

  return (
    <div>
      <div>
        <div>{day}</div>
        <div>{time}</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Enter city name on English"
          ></input>
          <button type="submit">Add New City</button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(addCity(value)),
});

export default connect(null, mapDispatchToProps)(Header);
