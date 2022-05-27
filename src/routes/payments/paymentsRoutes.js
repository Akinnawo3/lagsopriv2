/**
 * Payments DriverRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncPayments, AsyncPaymentsDetails, AsyncPaymentsSuccessful, AsyncPaymentsUnsuccessful, AsyncPaymentsUndecided} from "Components/AsyncComponent/AsyncComponent";

const PaymentsRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/payments/unsuccessful`} component={AsyncPaymentsUnsuccessful} />
      <Route path={`/admin/payments/successful`} component={AsyncPaymentsSuccessful} />
      <Route path={`/admin/payments/undecided`} component={AsyncPaymentsUndecided} />
      <Route path={`/admin/payments/:id`} component={AsyncPaymentsDetails} />
      <Route path={`/admin/payments`} component={AsyncPayments} />
    </Switch>
  </div>
);

export default PaymentsRoutes;
