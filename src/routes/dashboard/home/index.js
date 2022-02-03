/**
 * Dashboard
 */
import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import IntlMessages from "Util/IntlMessages";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {VisitorAreaChartWidget, TripCard, OverallTrafficStatusWidget, SchedulesWidget, PaymentWidget, RefundsWidget} from "Components/Widgets";
import {visitorsData, salesData, ordersData, trafficStatus} from "./data";
import VehicleChart from "Components/Widgets/VehicleChart";
import DriverChart from "Components/Widgets/DriverChart";
import {connect} from "react-redux";
import RevenueWidget from "../../../components/Widgets/RevenueWidget";
import {Link} from "react-router-dom";

const HomeDashboard = ({match}) => {
  return (
    <div className="ecom-dashboard-wrapper">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Zeno Admin Dashboard" />
      </Helmet>
      <PageTitleBar home title={<IntlMessages id="sidebar.dashboard" />} match={match} />

      <div className="row">
        <div className="col-sm-6 col-md-4 w-xs-half-block">
          <VisitorAreaChartWidget data={visitorsData} />
        </div>

        <div className="col-sm-12 col-md-4 w-xs-half-block">
          <DriverChart data={ordersData} />
        </div>
        <div className="col-sm-6 col-md-4 w-xs-full">
          <VehicleChart data={salesData} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 d-sm-full">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <RctCollapsibleCard
                // colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
                heading={<IntlMessages id="widgets.trips" />}
                // collapsible
                // reloadable
                // closeable
                fullBlock
                customClasses="overflow-hidden"
              >
                <TripCard />
              </RctCollapsibleCard>
              <SchedulesWidget />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              {/* <div className="dash-cards-lg"> */}
              <PaymentWidget />
              <Link to="/admin/revenues">
                <RevenueWidget />
              </Link>
              {/* </div> */}
              <RefundsWidget />
              {/*<NewOrderCountdown />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = (state) => ({
  counter: state.notification.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard);
