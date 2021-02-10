import React from 'react';
import { useParams, Link } from 'react-router-dom';

import FullWeatherInfoContainer from '../../components/full-weather-info-container';

function FullWeatherInfoPage() {
  const { city } = useParams();

  return (
    <div className="FullWeatherInfoPage">
      <FullWeatherInfoContainer city={city} />
      <Link to="/">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </Link>
    </div>
  );
}

export default FullWeatherInfoPage;
