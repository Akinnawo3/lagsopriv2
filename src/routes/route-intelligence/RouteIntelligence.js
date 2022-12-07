import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Card } from "reactstrap";
import SummaryCards from "./component/summaryCards";

const RouteIntelligence = ({ match }) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Route Intelligence"} match={match} />
      <Card>
        <SummaryCards />
      </Card>
    </div>
  );
};

export default RouteIntelligence;
