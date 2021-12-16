/**
 *  Schedule Widget
 */
import React, {useState, useEffect} from "react";
import axios from "axios";
import CountUp from "react-countup";
import {RctCardContent} from "Components/RctCard";
import api from "../../environments/environment";
import {NotificationManager} from "react-notifications";
import {getTodayDate} from "Helpers/helpers";

const RevenueWidget = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getSchedulesCount();
  }, []);

  const getSchedulesCount = async () => {
    try {
      const res = await axios.get(`${api.revenueSplit}/v1.1/admin/revenues?component=gross&start_date=${getTodayDate()}&end_date=${getTodayDate()}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        setBalance(res.data.data.total ? res.data.data.total : 0);
      }
    } catch (err) {}
  };

  return (
    <div className="current-widget bg-secondary">
      <RctCardContent>
        <div className="d-flex justify-content-between">
          <div className="align-items-start">
            <h3 className="mb-10">
              Today <br /> Revenue
            </h3>
            <h2 className="mb-0">
              <CountUp start={0} end={balance} />
            </h2>
          </div>
          <div className="align-items-end">
            <i className="zmdi zmdi-time"></i>
          </div>
        </div>
      </RctCardContent>
    </div>
  );
};

export default RevenueWidget;

// import React from 'react'

// const RevenueWidget = () => {
//     return (
//         <div>
//             <h1>Revenue</h1>
//         </div>
//     )
// }

// export default RevenueWidget
