/**
 * schedule Routes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncSchedule, AsyncScheduleDetails,
} from 'Components/AsyncComponent/AsyncComponent';

const ScheduleRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/schedule/:id`} component={AsyncScheduleDetails} />
            <Route path={`/admin/schedule`} component={AsyncSchedule} />
        </Switch>
    </div>
);

export default  ScheduleRoutes;
