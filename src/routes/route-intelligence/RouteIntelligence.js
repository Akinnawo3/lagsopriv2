import React from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Card, CardBody, Col, Row } from "reactstrap";
import SummaryCards from "./component/summaryCards";
import SchedulesChart from "./component/schedulesChart";

const RouteIntelligence = ({ match }) => {
  return (
    <div className="table-wrapper ">
      <PageTitleBar title={"Route Intelligence"} match={match} />
      <Card className="my-3">
        <CardBody>
          <SummaryCards />
          <div className="mt-3">
            <Row>
              <Col md="6">
                <SchedulesChart />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RouteIntelligence;
