import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Characters, Welcome } from '@Containers';

import './App.scss';

export default () => (
  <Switch>
    <Route path="/" component={Welcome} exact />
    <Route path="/game" component={Characters} />
  </Switch>
);
