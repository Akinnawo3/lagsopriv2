import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import VehiclesPerformanceTable from "./components/vehiclesPerformanceTable";

const VehiclesPerformance = ({ match }) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Performance"} match={match} />
      <VehiclesPerformanceTable />
    </div>
  );
};

export default VehiclesPerformance;
