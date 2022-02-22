import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getDrivers, getDriversCount} from "Actions/driverAction";
import DriverTable from "Routes/drivers/components/driverTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
const qs = require("qs");

const InactiveDrivers = ({history, getDrivers, drivers, match, getDriversCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || drivers.length < 1) {
      getDrivers(5, currentPage, true);
      getDriversCount(5);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Inactive Drivers"} match={match} />
      <DriverTable status={5} header="Inactive Drivers" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDrivers: (status, page_no, spinner) => dispatch(getDrivers(status, page_no, spinner)),
    getDriversCount: (status) => dispatch(getDriversCount(status)),
  };
}

const mapStateToProps = (state) => ({
  drivers: state.driver.drivers,
  driversCount: state.driver.driversCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(InactiveDrivers);
