/**
 * VehicleRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncVehicles,
    AsyncInactiveVehicles,
    AsyncActiveVehicles,
    AsyncVehicleDetails,
    AsyncVehiclesFeedback,
    AsyncVehiclesFeedbackDetails, AsyncPartners,
} from 'Components/AsyncComponent/AsyncComponent';

const PartnersRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/partners`} component={AsyncPartners} />
        </Switch>
    </div>
);

export default PartnersRoutes;
