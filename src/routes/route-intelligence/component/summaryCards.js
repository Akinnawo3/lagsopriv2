import React from "react";
import CountUp from "react-countup";
import { Col, Row } from "reactstrap";

const SummaryCards = () => {
  const items = [
    { title: "Total downloads", value: "3123456,789" },
    { title: "Total schedules", value: "3123456789" },
    { title: "Total trip request", value: "3123456789" },
    { title: "Total driver not found", value: "3123456789" },
  ];
  return (
    <div className="p-3">
      <Row>
        {items.map((item) => (
          <Col key={item?.title} md="6" lg="3">
            <div className="p-3 border mt-3">
              <h2>
                <CountUp separator="," className="counter-point" start={0} end={parseInt(item.value, 10)} duration={5} useEasing={true} />
              </h2>
              <small className="text-muted">{item.title}</small>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SummaryCards;
