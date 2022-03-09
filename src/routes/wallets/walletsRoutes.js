/**
 *  TripsRoutes
 */
/* eslint-disable */
import React from "react";
import {Route, Switch} from "react-router-dom";

// async components
import {AsyncWalletsPending, AsyncWalletsCancelled, AsyncWalletsCompleted, AsyncWalletsDebit, AsyncWallet, AsyncWallets} from "Components/AsyncComponent/AsyncComponent";

const WalletsRoutes = ({match}) => (
  <div className="content-wrapper">
    <Switch>
      <Route path={`/admin/wallets/pending`} component={AsyncWalletsPending} />
      <Route path={`/admin/wallets/cancelled`} component={AsyncWalletsCancelled} />
      <Route path={`/admin/wallets/completed`} component={AsyncWalletsCompleted} />
      <Route path={`/admin/wallets/debit`} component={AsyncWalletsDebit} />
      <Route path={`/admin/wallets/:id`} component={AsyncWallet} />
      <Route path={`/admin/wallets`} component={AsyncWallets} />
    </Switch>
  </div>
);

export default WalletsRoutes;
