import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Main from '~/pages/Main';
import MyFlights from '~/pages/MyFlights';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Main} isPrivate />
      <Route path="/myflights" exact component={MyFlights} isPrivate />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
