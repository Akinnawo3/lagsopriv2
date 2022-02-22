/**
 * Trips
 */
import React, {useState, useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import TripsTable from "Routes/trips/component/tripsTable";
const qs = require("qs");

const Trips = ({history, match, getTrips, getTripCount, trips}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || trips.length < 1) {
      getTrips(1, "", true);
      getTripCount();
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Trips"} match={match} />
      <TripsTable status={""} header={"All trips"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
    getTripCount: (status) => dispatch(getTripCount(status)),
  };
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  tripCount: state.trips.tripCount,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
