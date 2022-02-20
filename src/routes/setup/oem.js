import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getOems} from "Actions/oemActions";
import OemTable from "./component/oemTable";
const qs = require("qs");

const Oem = ({history, match, getOems}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || drivers.length < 1) {
      getOems(currentPage, "", true);
      getVehiclesCount();
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"OEM"} match={match} />
      <OemTable assign={""} header="All Vehicles" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
    getOems: (page_no, spinner) => dispatch(getOems(page_no, spinner)),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Oem);
