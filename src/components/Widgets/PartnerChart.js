/**
 * Driver Chart Widget
 */
import React, {useState, useEffect} from "react";
import CountUp from "react-countup";

// chart
import TinyAreaChart from "Components/Charts/TinyAreaChart";

// intl messages
import IntlMessages from "Util/IntlMessages";

// rct card box
import {RctCard, RctCardContent} from "Components/RctCard";

// chart config
import ChartConfig from "Constants/chart-config";

// helpers
import {getFirstDayOfMonth, getLastDayOfMonth, hexToRgbA} from "Helpers/helpers";
import axios from "axios";
import api from "../../environments/environment";
import {NotificationManager} from "react-notifications";

const PartnerChart = ({data}) => {
  const [driverCount, setDriverCount] = useState(0);
  const [driverOffline, setDriverOffline] = useState(0);
  const [driverOnline, setDriverOnline] = useState(0);

//   useEffect(() => {
//     getDriverCount();
//     getDriverOffline();
//     getDriverOnline();
//   }, []);
//   const getDriverCount = async () => {
//     try {
//       const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&component=count`);
//       if (res.data.status === "error") {
//         NotificationManager.error(res.data.msg);
//       } else {
//         setDriverCount(res.data.data.total ? res.data.data.total : 0);
//       }
//     } catch (err) {}
//   };

//   const getDriverOffline = async () => {
//     try {
//       const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&component=count&driver_online_status=0`);
//       if (res.data.status === "error") {
//         NotificationManager.error(res.data.msg);
//       } else {
//         setDriverOffline(res.data.data.total ? res.data.data.total : 0);
//       }
//     } catch (err) {}
//   };

//   const getDriverOnline = async () => {
//     try {
//       const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&component=count&driver_online_status=1`);
//       if (res.data.status === "error") {
//         NotificationManager.error(res.data.msg);
//       } else {
//         setDriverOnline(res.data.data.total ? res.data.data.total : 0);
//       }
//     } catch (err) {}
//   };

  return (
    <RctCard>
      <RctCardContent>
        <div className="clearfix">
          <div className="w-100">
            <div className="d-flex justify-content-between w-100">
              <h3 className="mb-15 fw-semi-bold">
                <IntlMessages id="widgets.partners" />
              </h3>
              {/*<div className="float-right hidden-md-down">*/}
              {/*    <div className="featured-section-icon">*/}
              <i className="icon-user" style={{fontSize: "30px"}}></i>
              {/*</div>*/}
              {/*</div>*/}
            </div>
            <div className="d-flex">
              <div className="mr-50">
                <span className="fs-14 d-block">
                  <IntlMessages id="widgets.online" />
                </span>
                {/* <CountUp separator="," className="counter-point" start={0} end={driverOnline} duration={5} useEasing={true} /> */}
              </div>
              <div className="mr-50">
                <span className="fs-14 d-block">
                  <IntlMessages id="widgets.offline" />
                </span>
                {/* <CountUp separator="," className="counter-point" start={0} end={driverOffline} duration={5} useEasing={true} /> */}
              </div>
              <div className="">
                <span className="fs-14 d-block">
                  <IntlMessages id="widgets.total" />
                </span>
                {/* <CountUp separator="," className="counter-point" start={0} end={driverCount} duration={5} useEasing={true} /> */}
              </div>
            </div>
          </div>
        </div>
      </RctCardContent>
    </RctCard>
  );
};

export default PartnerChart;
