import React, {useState, useEffect, Fragment, useRef} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import DougnutProjection from "./components/doughnut";
import DailyTripsGraph from "./components/dailyTripsGraph";
import TopFive from "./components/topFive";
import PerformanceTable from "./components/performanceTable";
const Compliance = ({match}) => {
  return (
    <div className="table-wrapper mb-3">
      <PageTitleBar title={"Compliance"} match={match} />
      <Row>
        <Col md={8}>
          <Row>
            <Col md={4} className="mt-3">
              <DougnutProjection />
            </Col>
            <Col md={8} className="mt-3">
              <DailyTripsGraph />
            </Col>
            <Col className="mt-3">
              <PerformanceTable />
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mt-3">
          <TopFive />
        </Col>
      </Row>
    </div>
  );
};



export default Compliance;
