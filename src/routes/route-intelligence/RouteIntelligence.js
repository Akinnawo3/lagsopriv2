import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Card } from "reactstrap";

const RouteIntelligence = ({match}) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Users"} match={match} />
      <Card>
        
      </Card>
    </div>
  );
};

export default RouteIntelligence;
