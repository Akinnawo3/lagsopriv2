/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncMaintenanceLog, AsyncMaintenanceDetails, AsyncVehicleMaintenanceHistory} from "Components/AsyncComponent/AsyncComponent";

const MaintenanceLog = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/maintenance/:id`} component={AsyncMaintenanceDetails} />
      <Route path={`/admin/maintenance`} component={AsyncMaintenanceLog} />
      <Route path={`/admin/maintenance-history`} component={AsyncVehicleMaintenanceHistory} />
    </Switch>
  </div>
);

export default MaintenanceLog;
