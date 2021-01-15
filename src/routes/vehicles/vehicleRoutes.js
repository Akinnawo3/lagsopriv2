/**
 * Users DriverRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncDrivers,
    AsyncDriver,
    AsyncActiveDrivers,
    AsyncInactiveDrivers,
    AsyncPendingDrivers,
    AsyncVerifiedDrivers,
    AsyncVehicles,
    AsyncInactiveVehicles, AsyncActiveVehicles,
} from 'Components/AsyncComponent/AsyncComponent';

const VehicleRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/vehicles/active`} component={AsyncActiveVehicles} />
            <Route path={`/admin/vehicles/inactive`} component={AsyncInactiveVehicles} />
            <Route path={`/admin/vehicles`} component={AsyncVehicles} />
        </Switch>
    </div>
);

export default VehicleRoutes;
