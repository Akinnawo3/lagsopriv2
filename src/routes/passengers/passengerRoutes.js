import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {AsyncPassengers, AsyncPassenger} from 'Components/AsyncComponent/AsyncComponent';

const PassengerRoutes = () => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/passengers/:id`} component={AsyncPassenger} />
            <Route path={`/admin/passengers`} component={AsyncPassengers} />
        </Switch>
    </div>
);

export default PassengerRoutes;
