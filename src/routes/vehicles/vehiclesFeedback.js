import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getVehiclesFeedback, getVehiclesFeedbackCount} from "Actions/vehicleAction";
import VehicleFeedbackTable from "Routes/vehicles/components/vehicleFeedbackTable";
const qs = require("qs");

const VehiclesFeedback = ({history, match, getVehicles, getVehiclesCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || vehicles.length < 1) {
      getVehicles(currentPage, true);
      getVehiclesCount();
    }
  }, []);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Vehicles  FeedBack"} match={match} />
      <VehicleFeedbackTable  header="Feedback" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, spinner) => dispatch(getVehiclesFeedback(page_no, spinner)),
    getVehiclesCount: () => dispatch(getVehiclesFeedbackCount()),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehiclesFeedback,
  vehiclesCount: state.vehicle.vehiclesFeedbackCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesFeedback);
