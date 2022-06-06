import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MaintenanceTable from "./maintenanceTable";

const MaintenanceLog = ({match}) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Service Requests"} match={match} />
      <MaintenanceTable />
    </div>
  );
};

export default MaintenanceLog;
