/**
 * @desc Dependencies
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**
 * @desc Views
 */
import SearchView from '../Views/SearchView/SearchView.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchView} />
    </Switch>
  </BrowserRouter>
);

export default Routes;