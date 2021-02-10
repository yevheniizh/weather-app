import React from 'react';
import { useParams } from 'react-router-dom';

import FullWeatherInfoContainer from '../../components/full-weather-info-container';
import FullWeatherInfoHeader from '../../components/full-weather-info-header/full-weather-info-header';

function FullWeatherInfoPage() {
  const { city } = useParams();

  return (
    <div className="FullWeatherInfoPage">
      <FullWeatherInfoHeader city={city} />
      <FullWeatherInfoContainer city={city} />
    </div>
  );
}

export default FullWeatherInfoPage;
