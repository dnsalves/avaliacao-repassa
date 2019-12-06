import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import User from '../pages/User';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Users" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
