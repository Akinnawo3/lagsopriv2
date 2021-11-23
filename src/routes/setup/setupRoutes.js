import React from "react";
import { Route, Switch } from "react-router-dom";

// async components
import {
  AsyncFees,
  AsyncOthers,
  AsyncRevenueSplit,
  AsyncRoles,
  AsyncAddPersonnel
} from "Components/AsyncComponent/AsyncComponent";

const SetupRoutes = ({ match }) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/setup/fees`} component={AsyncFees} />
      <Route path={`/admin/setup/others`} component={AsyncOthers} />
      <Route
        path={`/admin/setup/revenue-split`}
        component={AsyncRevenueSplit}
      />
      <Route path={`/admin/setup/roles`} component={AsyncRoles} />
      <Route
        path={`/admin/setup/add-personnel`}
        component={AsyncAddPersonnel }
      />
    </Switch>
  </div>
);

export default SetupRoutes;
