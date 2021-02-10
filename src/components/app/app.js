import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../../pages/main-page';

import FullWeatherInfoContainer from '../full-weather-info-container';

const App = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/weather-app" />
        <Route path="/weather-app" exact component={MainPage} />
        <Route
          path="/weather-app/:city"
          exact
          component={FullWeatherInfoContainer}
        />
      </Switch>
    </div>
  );
};

export default App;
