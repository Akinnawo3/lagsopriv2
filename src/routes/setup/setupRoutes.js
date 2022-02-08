import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncFees, AsyncOthers, AsyncRevenueSplit, AsyncRoles, AsyncAddPersonnel, AsyncGeoFencing} from "Components/AsyncComponent/AsyncComponent";

const SetupRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/setup/fees`} component={AsyncFees} />
      <Route path={`/admin/setup/others`} component={AsyncOthers} />
      <Route path={`/admin/setup/revenue-split`} component={AsyncRevenueSplit} />
      <Route path={`/admin/setup/roles`} component={AsyncRoles} />
      <Route path={`/admin/setup/add-personnel`} component={AsyncAddPersonnel} />
      <Route path={`/admin/setup/geo-fencing`} component={AsyncGeoFencing} />
      <Route path={`/admin/setup/oem`} component={AsyncGeoFencing} />
    </Switch>
  </div>
);

export default SetupRoutes;
