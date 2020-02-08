import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Index from '../pages/Index';
import Menu from '../pages/Menu';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route exact path="/">
        <Index />
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;