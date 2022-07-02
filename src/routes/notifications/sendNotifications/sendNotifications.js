import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

const SendNotifications = ({match}) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Send Notification"} match={match} />
    </div>
  );
};
export default SendNotifications;
