/**
 * PartnerRoutes
 */
/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncPartners,
    AsyncPartner,
    AsyncPartnersPending,
    AsyncPartnersVerified, AsyncPartnerDrivers
} from 'Components/AsyncComponent/AsyncComponent';

const PartnersRoutes = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Route path={`/admin/partners/pending`} component={AsyncPartnersPending} />
            <Route path={`/admin/partners/partner-drivers`} component={AsyncPartnerDrivers} />
            <Route path={`/admin/partners/verified`} component={AsyncPartnersVerified} />
            <Route path={`/admin/partners/:id`} component={AsyncPartner} />
            <Route path={`/admin/partners`} component={AsyncPartners} />
        </Switch>
    </div>
);

export default PartnersRoutes;
