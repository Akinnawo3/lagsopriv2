/**
 * App Layouts
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from 'Components/RctAppLayout';

// router service
import routerService from "../services/_routerService";
import Spinner from "Components/spinner/Spinner";
import RctThemeProvider from "./RctThemeProvider";
import LinearProgress from "@material-ui/core/LinearProgress";

class DefaultLayout extends Component {
	render() {
		const { match, isLoading } = this.props;
		console.log(match.url)
		return (
			<RctAppLayout>
				{isLoading && <Spinner />}

				{routerService && routerService.map((route, key) =>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
			</RctAppLayout>
		);
	}
}

const mapStateToProps = ({ loading }) => {
	const isLoading = loading.loading
	const isLoadingStatus = loading.loadingStatus
	return { isLoading, isLoadingStatus };
};


export default withRouter(connect(mapStateToProps)(DefaultLayout));
