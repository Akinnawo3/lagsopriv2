/**
 * TripsCancelled
 */
import React, {useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getCancelledTripCount, getCancelledTrips} from "Actions/tripAction";
import TripsTable from "Routes/trips/component/tripsTable";

const TripsCancelled = ({match, getCancelledTrips, getCancelledTripCount}) => {
  useEffect(() => {
    getCancelledTrips(1, true);
    getCancelledTripCount("cancelled");
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Trips"} match={match} />
      <TripsTable status={"cancel"} header={"Cancelled Trips"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getCancelledTrips: (pageNo, spinner) => dispatch(getCancelledTrips(pageNo, spinner)),
    getCancelledTripCount: () => dispatch(getCancelledTripCount()),
  };
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  tripCount: state.trips.tripCount,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsCancelled);
