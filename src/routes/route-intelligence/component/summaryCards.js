import React from "react";
import { Col } from "reactstrap";

const SummaryCards = () => {
  const items = [
    { title: "Total downloads", value: "3,123,456,789" },
    { title: "Total schedules", value: "3,123,456,789" },
    { title: "Total trip request", value: "3,123,456,789" },
    { title: "Total driver not found", value: "3,123,456,789" },
  ];
  return (
    <div>
      <Col>
        {items.map((item) => (
          <div key={item?.title} className="p-3">
            <h2>{item.value}</h2>
            <div>{item.title}</div>
          </div>
        ))}
      </Col>
    </div>
  );
};

export default SummaryCards;
