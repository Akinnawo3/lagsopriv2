/**
 * schedule Routes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncFdt,
    AsyncFdtDetails,
} from 'Components/AsyncComponent/AsyncComponent';

const FdtRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/fdt/:id`} component={AsyncFdtDetails} />
            <Route path={`/admin/fdt`} component={AsyncFdt} />
        </Switch>
    </div>
);

export default  FdtRoutes;
