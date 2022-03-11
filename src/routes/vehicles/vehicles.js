import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getVehiclesCount, getVehicles} from "Actions/vehicleAction";
import {getOems, getOemCount} from "Actions/oemAction";
import VehicleTable from "Routes/vehicles/components/vehicleTable";
const qs = require("qs");

const Vehicles = ({history, match, getVehicles, getVehiclesCount, getOems}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || vehicles.length < 1) {
      getVehicles(currentPage, "", true);
      getVehiclesCount();
      getOems(1, true);
    }
  }, []);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Vehicles"} match={match} />
      <VehicleTable assign={""} header="All Vehicles" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
    getVehiclesCount: (assign) => dispatch(getVehiclesCount(assign)),
    getOems: (page_no, spinner) => dispatch(getOems(page_no, spinner)),
    getOemCount: () => dispatch(getOemCount()),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  oemsCount: state.oem.oemsCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
