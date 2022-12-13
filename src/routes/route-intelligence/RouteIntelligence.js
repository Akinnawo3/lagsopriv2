import React, { useState } from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Card, CardBody, Col, Row } from "reactstrap";
import SummaryCards from "./component/summaryCards";
import SchedulesChart from "./component/schedulesChart";
import TripsRequestChart from "./component/tripsRequestChart";
import RequestsTable from "./component/requestsTable";
import { useEffect } from "react";
import { setIn } from "immutable";

const RouteIntelligence = ({ match }) => {
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [total, setTotal] = useState(0);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const total = parseInt(minutes * 60, 10) + parseInt(seconds, 10);
  //   setTotal(total);
  // };

  // useEffect(() => {
  //   let interval = null;

  //   if (total > 0) {
  //     interval = setInterval(() => {
  //       setTotal((total) => total - 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [total]);

  return (
    <div className="table-wrapper ">
      <PageTitleBar title={"Route Intelligence"} match={match} />
      <h1>Route Intelligence</h1>
{/* 
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)} min="0" max={30} />
        <br />
        <input type="number" placeholder="Enter Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} min={0} max={59} />
        <br />
        <button>Submit</button>
      </form>

      <div>
        {Math.floor(total / 60)} : {total % 60}
      </div> */}

      {/* <Card className="my-3">
        <CardBody>
          <SummaryCards />
          <div className="mt-3">
            <Row>
              <Col md="6">
                <SchedulesChart />
              </Col>
              <Col md="6">
                <TripsRequestChart />
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <RequestsTable />
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default RouteIntelligence;
