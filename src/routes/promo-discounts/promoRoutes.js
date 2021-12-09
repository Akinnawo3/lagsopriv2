import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncPromoDiscount,AsyncPromoDiscountDetails} from "Components/AsyncComponent/AsyncComponent";

const promoRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/promo-discounts/:id`} component={AsyncPromoDiscountDetails} />
      <Route path={`/admin/promo-discounts`} component={AsyncPromoDiscount} />
    </Switch>
  </div>
);
export default promoRoutes;
