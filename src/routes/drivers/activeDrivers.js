import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDrivers, getDriversCount } from "Actions/driverAction";
import DriverTable from "Routes/drivers/components/driverTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
const qs = require("qs");

const ActiveDrivers = ({ history, getDrivers, drivers, match, getDriversCount, forNotification, updateList, authIdList }) => {
  const pageFromQuery = qs.parse(history?.location?.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || drivers.length < 1) {
      getDrivers(4, currentPage, true);
      getDriversCount(4);
    }
  }, []);

  return (
    <div className="table-wrapper">
      {!forNotification && <PageTitleBar title={"Active Drivers"} match={match} />}
      <DriverTable status={4} header="Active Drivers" forNotification={forNotification} updateList={updateList} authIdList={authIdList} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDrivers);
