import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import ChatForm from '@/pages/ChatForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/chat" component={ChatForm} />
    <Route component={Home} />
  </Switch>
);

export default Routes;
