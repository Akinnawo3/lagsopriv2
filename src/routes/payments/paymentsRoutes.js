/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {AsyncPayments, AsyncPaymentsSuccessful, AsyncPaymentsUnsuccessful,} from 'Components/AsyncComponent/AsyncComponent';

const PaymentsRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/payments/unsuccessful`} component={AsyncPaymentsUnsuccessful} />
            <Route path={`/admin/payments/successful`} component={AsyncPaymentsSuccessful} />
            <Route path={`/admin/payments`} component={AsyncPayments} />
        </Switch>
    </div>
);

export default PaymentsRoutes;
