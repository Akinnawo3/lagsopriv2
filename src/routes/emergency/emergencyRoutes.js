/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {AsyncEmergency, AsyncEmergencyDetails,
} from 'Components/AsyncComponent/AsyncComponent';

const EmergencyRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/emergency/:id`} component={AsyncEmergencyDetails} />

            <Route path={`/admin/emergency`} component={AsyncEmergency} />
        </Switch>
    </div>
);

export default EmergencyRoutes;
