/**
 * referral Routes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncReferral} from "Components/AsyncComponent/AsyncComponent";
import {AsyncRevenues} from "../../components/AsyncComponent/AsyncComponent";

const RevenueRoute = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      {/*<Route path={`/admin/referral/:id`} component={AsyncReferralDetails} />*/}
      <Route path={`/admin/revenues`} component={AsyncRevenues} />
    </Switch>
  </div>
);

export default RevenueRoute;
