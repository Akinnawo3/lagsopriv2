/**
 * referral Routes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncReferral,
    AsyncReferralDetails,
} from 'Components/AsyncComponent/AsyncComponent';

const ReferralRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/referral/:id`} component={AsyncReferralDetails} />
            <Route path={`/admin/referral`} component={AsyncReferral} />
        </Switch>
    </div>
);

export default  ReferralRoutes;
