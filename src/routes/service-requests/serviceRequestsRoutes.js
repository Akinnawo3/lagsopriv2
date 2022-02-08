/**
 * Payment Service DriverRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncServiceRequests} from "Components/AsyncComponent/AsyncComponent";

const ServiceRequestsRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/service-requests`} component={AsyncServiceRequests} />
    </Switch>
  </div>
);

export default ServiceRequestsRoutes;
