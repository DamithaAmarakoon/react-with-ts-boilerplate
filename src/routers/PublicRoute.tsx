import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
}

const PublicRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <Route {...rest} component={Component} />
  );
};

export default PublicRoute;
