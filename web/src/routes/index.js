import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Employees from '../pages/Employees';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Dashboard" exact component={Employees} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
