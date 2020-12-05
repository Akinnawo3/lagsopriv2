/**
 * Overall Traffic Status Widget
 */
import React, { Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// chart
import StackedBarChart from 'Components/Charts/StackedBarChart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// chart config
import ChartConfig from 'Constants/chart-config';

export default class OverallTrafficStatus extends Component {
	render() {
		const { chartLabels, chartDatasets, onlineSources, today, lastMonth } = this.props.chartData;
		return (
			<Fragment>
				<div className="p-40 display-n">
					<div className="row">
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block"><IntlMessages id="widgets.today" /></span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">{onlineSources}</h2>
								<i className="ti-arrow-up text-info font-lg"></i>
							</div>
						</div>
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block"><IntlMessages id="widgets.this month" /></span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">{today} </h2>
								<i className="ti-arrow-up text-info font-lg"></i>
							</div>
						</div>
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block"><IntlMessages id="widgets.this year" /></span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">{lastMonth} </h2>
								<i className="ti-arrow-down text-pink font-lg"></i>
							</div>
						</div>
					</div>
				</div>
				<StackedBarChart
					labels={chartLabels}
					datasets={chartDatasets}
				/>
				<div className="p-40 display-n">
					<div className="mb-2 font-weight-bold">Revenue Share</div>
					<div className="row">
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block">Zeno</span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">₦{onlineSources}</h2>
							</div>
						</div>
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block">Operators</span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">₦{today} </h2>
							</div>
						</div>
						<div className="col-xl-4 col-md-4 col-sm-4">
							<span className="text-muted mb-5 d-block">Maintenance</span>
							<div className="d-flex justify-content-between">
								<h2 className="text-muted mb-0">₦20000 </h2>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
