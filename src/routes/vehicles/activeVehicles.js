import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getVehiclesCount, getVehicles} from "Actions/vehicleAction";
import VehicleTable from "Routes/vehicles/components/vehicleTable";
const qs = require("qs");

const ActiveVehicles = ({history, match, getVehicles, getVehiclesCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || vehicles.length < 1) {
      getVehicles(currentPage, 1, true);
      getVehiclesCount(1);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Active"} match={match} />
      <VehicleTable assign={""} header="Active Vehicles" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
    getVehiclesCount: (assign) => dispatch(getVehiclesCount(assign)),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveVehicles);
