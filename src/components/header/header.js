import React from 'react';

function Header() {
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
    <div>
      <div>
        <div>{day}</div>
        <div>{time}</div>
      </div>
      <div>
        <form>
          <input placeholder="Enter city name on English"></input>
          <button type="submit">Add New City</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
