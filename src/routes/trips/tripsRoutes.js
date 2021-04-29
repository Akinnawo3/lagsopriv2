/**
 *  TripsRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncTrips, AsyncTripDetails, AsyncTripsCompleted, AsyncTripsCancelled, AsyncTripsWaiting, AsyncTripsCurrent,
} from 'Components/AsyncComponent/AsyncComponent';

const TripRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/trips/current`} component={AsyncTripsCurrent} />
            <Route path={`/admin/trips/waiting`} component={AsyncTripsWaiting} />
            <Route path={`/admin/trips/cancelled`} component={AsyncTripsCancelled} />
            <Route path={`/admin/trips/completed`} component={AsyncTripsCompleted} />
            <Route path={`/admin/trips/:id`} component={AsyncTripDetails} />
            <Route path={`/admin/trips`} component={AsyncTrips} />
        </Switch>
    </div>
);

export default TripRoutes;
