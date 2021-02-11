import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../../pages/main-page';

import FullWeatherInfoPage from '../../pages/full-weather-info-page';

import './app.module.scss';

const App = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/weather-app" />
        <Route path="/weather-app" exact component={MainPage} />
        <Route
          path="/weather-app/:city"
          exact
          component={FullWeatherInfoPage}
        />
      </Switch>
    </>
  );
};

export default App;
