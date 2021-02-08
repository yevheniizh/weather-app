import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../redux/actions';

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

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
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
