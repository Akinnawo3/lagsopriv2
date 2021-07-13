/**
 * Dashboard
 */

import React from 'react'
import { Helmet } from "react-helmet";
import IntlMessages from 'Util/IntlMessages';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	VisitorAreaChartWidget,
	TripCard,
	OverallTrafficStatusWidget,
	SchedulesWidget,
	PaymentWidget,
	RefundsWidget,
} from "Components/Widgets";
import {
	visitorsData,
	salesData,
	ordersData,
	trafficStatus,
} from './data';
import GoogleMapComponent from "../../../components/Maps/GoogleMapComponent";
import GoogleMapComponentUser from "Components/Maps/GoogleMapComponentUsers";
import VehicleChart from "Components/Widgets/VehicleChart";
import DriverChart from "Components/Widgets/DriverChart";

 const HomeDashboard = ({match}) => {
 	return (
			<div className="ecom-dashboard-wrapper">
				<Helmet>
					<title>Dashboard</title>
					<meta name="description" content="Zeno Admin Dashboard" />
				</Helmet>
				<PageTitleBar home title={<IntlMessages id="sidebar.dashboard" />} match={match} />
				<div className="row">
					<div className="col-sm-12 col-md-6 w-xs-half-block">
						<GoogleMapComponent />
					</div>
					<div className="col-sm-12 col-md-6 w-xs-half-block">
						<GoogleMapComponentUser />
					</div>
						</div>
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<VisitorAreaChartWidget
							data={visitorsData}
						/>
					</div>

					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<DriverChart
							data={ordersData}
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<VehicleChart
							data={salesData}
						/>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						customClasses="trafic-bar-chart"
						colClasses="col-sm-12 col-md-12 col-lg-5 d-sm-full"
						heading={<IntlMessages id="widgets.revenue" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<OverallTrafficStatusWidget
							chartData={trafficStatus}
						/>
					</RctCollapsibleCard>
					<div className="col-sm-12 col-md-12 col-lg-7 d-sm-full">
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
								<div className="dash-cards-lg">
									<PaymentWidget />
								</div>
								<RefundsWidget />
								{/*<NewOrderCountdown />*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		)

}

export default HomeDashboard
