/**
 * Payment Service DriverRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {
  AsyncPaymentsService,
  AsyncPaymentsServiceDetails,
  AsyncPaymentsServiceSuccessful,
  AsyncPaymentsServiceUnsuccessful,
  AsyncPaymentsServicePending, AsyncPaymentsServiceUndecisive, AsyncPaymentsServiceRefund,
} from "Components/AsyncComponent/AsyncComponent";

const PaymentsServiceRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/payments-service/unsuccessful`} component={AsyncPaymentsServiceUnsuccessful} />
      <Route path={`/admin/payments-service/successful`} component={AsyncPaymentsServiceSuccessful} />
      <Route path={`/admin/payments-service/pending`} component={AsyncPaymentsServicePending} />
      <Route path={`/admin/payments-service/refund`} component={AsyncPaymentsServiceRefund} />
      <Route path={`/admin/payments-service/:id`} component={AsyncPaymentsServiceDetails} />
      <Route path={`/admin/payments-service`} component={AsyncPaymentsService} />
    </Switch>
  </div>
);

export default PaymentsServiceRoutes;
