import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Index from '../pages/Index';
import Menu from '../pages/Menu';
import Contact from '../pages/Contact';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route exact={true} path="/">
        <Index />
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
