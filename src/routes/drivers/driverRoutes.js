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
    AsyncPendingDrivers,
    AsyncAcceptedDrivers,
    AsyncVerifiedDrivers,
    AsyncInactiveDrivers
} from 'Components/AsyncComponent/AsyncComponent';
import { AsyncTrainedDrivers } from '../../components/AsyncComponent/AsyncComponent';

const DriverRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/drivers/pending`} component={AsyncPendingDrivers} />
            <Route path={`/admin/drivers/verified`} component={AsyncVerifiedDrivers} />
            <Route path={`/admin/drivers/accepted`} component={AsyncAcceptedDrivers} />
            <Route path={`/admin/drivers/trained`} component={AsyncTrainedDrivers} />
            <Route path={`/admin/drivers/active`} component={AsyncActiveDrivers} />
            <Route path={`/admin/drivers/inactive`} component={AsyncInactiveDrivers} />
            <Route path={`/admin/drivers/:id`} component={AsyncDriver} />
            <Route path={`/admin/drivers`} component={AsyncDrivers} />
        </Switch>
    </div>
);

export default DriverRoutes;
