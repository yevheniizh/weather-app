import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '../../pages/main-page';

const App = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/weather-app" />
        <Route path="/weather-app" exact component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
