/**
 * VehicleRoutes
 */
/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";

// async components
import {
  AsyncVehicles,
  AsyncInactiveVehicles,
  AsyncActiveVehicles,
  AsyncVehicleDetails,
  AsyncVehiclesFeedback,
  AsyncVehiclesFeedbackDetails,
  AsyncVehiclesPerformance,
} from "Components/AsyncComponent/AsyncComponent";

const VehicleRoutes = ({ match }) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/vehicles/feedback/:id`} component={AsyncVehiclesFeedbackDetails} />
      <Route path={`/admin/vehicles/active`} component={AsyncActiveVehicles} />
      <Route path={`/admin/vehicles/inactive`} component={AsyncInactiveVehicles} />
      <Route path={`/admin/vehicles/feedback`} component={AsyncVehiclesFeedback} />
      <Route path={`/admin/vehicles/:id`} component={AsyncVehicleDetails} />
      <Route path={`/admin/vehicles`} component={AsyncVehicles} />
      <Route path={`/admin/vehicles/performance`} component={AsyncVehiclesPerformance} />
    </Switch>
  </div>
);

export default VehicleRoutes;
