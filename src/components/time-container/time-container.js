import React, { useState, useEffect } from 'react';

import styles from './time-container.module.scss';

function TimeContainer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }

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

  const day = date.toLocaleDateString('en-US', dayOptions);
  const time = date.toLocaleTimeString('en-US', timeOptions);

  return (
    <div className={styles['time-container']}>
      <div className={styles['time-container__day']}>{day}</div>
      <div className={styles['time-container__time']}>{time}</div>
    </div>
  );
}

export default TimeContainer;
