import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncPromoDiscount, AsyncPromoDiscountDetails, AsyncPromoBeneficiaries} from "Components/AsyncComponent/AsyncComponent";

const promoRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path={`/admin/promo-discounts/:id`} component={AsyncPromoDiscountDetails} />
      <Route path={`/admin/promo-discounts/:id/beneficiaries`} component={AsyncPromoBeneficiaries} />
      <Route path={`/admin/promo-discounts`} component={AsyncPromoDiscount} />
      <Route path={`/admin/promo-discounts/:id/beneficiaries`} component={AsyncPromoDiscount} />
    </Switch>
  </div>
);
export default promoRoutes;
