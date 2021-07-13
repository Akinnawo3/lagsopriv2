/**
 * RatingRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
     AsyncDriverRatings, AsyncUserRatings, AsyncRatingsDetails,
} from 'Components/AsyncComponent/AsyncComponent';

const RatingsRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/ratings/passengers`} component={AsyncUserRatings} />
            <Route path={`/admin/ratings/:id`} component={AsyncRatingsDetails} />
            <Route path={`/admin/ratings`} component={AsyncDriverRatings} />
        </Switch>
    </div>
);

export default RatingsRoutes;
