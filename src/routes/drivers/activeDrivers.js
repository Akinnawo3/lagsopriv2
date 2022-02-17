import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getDrivers, getDriversCount} from "Actions/driverAction";
import DriverTable from "Routes/drivers/components/driverTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

const ActiveDrivers = ({history, getDrivers, match, getDriversCount}) => {
  useEffect(() => {
    if (history.location.search === "") {
      getDrivers(4, 1, true);
      getDriversCount(4);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Active Drivers"} match={match} />
      <DriverTable status={4} header="Active Drivers" />
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
