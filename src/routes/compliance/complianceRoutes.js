/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncCompliance} from "Components/AsyncComponent/AsyncComponent";

const ComplianceRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/compliance`} component={AsyncCompliance} />
    </Switch>
  </div>
);

export default ComplianceRoutes;
