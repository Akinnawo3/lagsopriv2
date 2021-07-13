/**
 * Dasboard DriverRoutes
 */
import React from 'react';
import {Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncHomeDashboardComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Dashboard = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>
         <Route path={`${match.url}/`} component={AsyncHomeDashboardComponent} />
      </Switch>
   </div>
);

export default Dashboard;
