import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// routers
import PrivateRoute from './PrivateRoute';

// components
import Dashboard from '../components/dashboard/Dashboard';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
