import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import HomePage from '../pages/HomePage';

const AppRoutes: FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route render={() => <Redirect to={{ pathname: '/products' }} />} />
  </Switch>
);

export default AppRoutes;
