// /**
//  * TripsCancelled
//  */
// import React, {useEffect} from "react";
// import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// import {connect} from "react-redux";
// import {getCancelledTripCount, getCancelledTrips} from "Actions/tripAction";
// import TripsTable from "Routes/trips/component/tripsTable";
// import {fitBounds} from "google-map-react";

// const TripsCancelled = ({match, getCancelledTrips, getCancelledTripCount}) => {
//   // this are trips for which drivers are not found
//   useEffect(() => {
//     getCancelledTrips(1, true);
//     getCancelledTripCount("cancelled");
//   }, []);

//   return (
//     <div className="table-wrapper">
//       <PageTitleBar title={"Trips"} match={match} />
//       <TripsTable status={"cancel"} header={"cancel"} />
//     </div>
//   );
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     getCancelledTrips: (pageNo, spinner) => dispatch(getCancelledTrips(pageNo, spinner)),
//     getCancelledTripCount: () => dispatch(getCancelledTripCount()),
//   };
// }

// const mapStateToProps = (state) => ({
//   trips: state.trips.trips,
//   tripCount: state.trips.tripCount,
//   isLoading: state.loading.loading,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TripsCancelled);

/**
 * TripsCompleted
 */
import React, {useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import TripsTable from "Routes/trips/component/tripsTable";

const TripsCancelled = ({match, getTrips, getTripCount}) => {
  useEffect(() => {
    getTrips(1, "cancel", true);
    getTripCount("cancel");
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
    getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
    getTripCount: (status) => dispatch(getTripCount(status)),
  };
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  tripCount: state.trips.tripCount,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsCancelled);
