import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getDrivers, getDriversCount} from "Actions/driverAction";
import DriverTable from "Routes/drivers/components/driverTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

const Drivers = ({history, getDrivers, match, getDriversCount}) => {
  useEffect(() => {
    if (history.location.search === "") {
      getDrivers("", 1, true);
      getDriversCount();
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Drivers"} match={match} />
      <DriverTable status={""} header="All Drivers" match={match} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
