/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncRefunds, AsyncRefundsCompleted, AsyncRefundsPending,
} from 'Components/AsyncComponent/AsyncComponent';

const RefundsRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/refunds/pending`} component={AsyncRefundsPending} />
            <Route path={`/admin/refunds/completed`} component={AsyncRefundsCompleted} />
            <Route path={`/admin/refunds`} component={AsyncRefunds} />
        </Switch>
    </div>
);

export default RefundsRoutes;
