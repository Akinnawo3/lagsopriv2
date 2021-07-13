/**
 * TripsCurrent
 */
import React, { useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import TripsTable from "Routes/trips/component/tripsTable";


const  TripsCurrent = ({match, getTrips, getTripCount}) => {

	useEffect(()=> {
		getTrips(1, 'on_ride', true);
		getTripCount('on_ride')
	},[])



	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Trips"} match={match} />
			<TripsTable status={'on_ride'} />
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
		getTripCount: (status) => dispatch(getTripCount(status)),
	};
}


const mapStateToProps = state => ({
	trips: state.trips.trips,
	tripCount: state.trips.tripCount,
	isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (TripsCurrent);
