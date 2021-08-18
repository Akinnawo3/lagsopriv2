/**
 * SupportRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncEmergency,
    AsyncEmergencyDetails,
    AsyncSupport, AsyncSupportClosed, AsyncSupportContactUs, AsyncSupportContactUsDetails,
    AsyncSupportDetails, AsyncSupportInProgress,
    AsyncSupportNew,
    AsyncSupportOpened,
    AsyncSupportSetup, AsyncSupportType, AsyncSupportUnresolved,
} from 'Components/AsyncComponent/AsyncComponent';

const SupportRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/support/setup`} component={AsyncSupportType} />
            <Route path={`/admin/support/new`} component={AsyncSupportNew} />
            <Route path={`/admin/support/opened`} component={AsyncSupportOpened} />
            <Route path={`/admin/support/closed`} component={AsyncSupportClosed} />
            <Route path={`/admin/support/unresolved`} component={AsyncSupportUnresolved} />
            <Route path={`/admin/support/create`} component={AsyncSupportSetup} />
            <Route path={`/admin/support/in-progress`} component={AsyncSupportInProgress} />
            <Route path={`/admin/support/contact-us/:id`} component={AsyncSupportContactUsDetails} />
            <Route path={`/admin/support/contact-us`} component={AsyncSupportContactUs} />
            <Route path={`/admin/support/:id`} component={AsyncSupportDetails} />
            <Route path={`/admin/support`} component={AsyncSupport} />
        </Switch>
    </div>
);

export default SupportRoutes;
