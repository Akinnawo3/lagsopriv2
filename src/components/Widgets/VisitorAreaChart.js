/**
 * Visitor Area Chart Widget
 */
import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';

// chart
import TinyAreaChart from 'Components/Charts/TinyAreaChart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCard, RctCardContent } from 'Components/RctCard';

// chart config
import ChartConfig from 'Constants/chart-config';

// helpers
import {getFirstDayOfMonth, getLastDayOfMonth, getTodayDate, hexToRgbA} from 'Helpers/helpers';
import axios from "axios";
import api from "../../environments/environment";
import {NotificationManager} from "react-notifications";

const VisitorAreaChart = ({ data }) => {
    const [riderCount, setRiderCount] = useState(0)
    const [riderCountMonth, setRiderCountMonth] = useState(0)
    const [riderCountToday, setRiderCountToday] = useState(0)

    useEffect(() => {
        getPassengerCount();
        getPassengerCountMonthly();
        getPassengerCountToday()
    },[])
    const getPassengerCount = async () => {
        try {
            const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&component=count`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setRiderCount(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getPassengerCountMonthly = async () => {
        try {
            const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&component=count&start_date=${getFirstDayOfMonth()}&end_date=${getLastDayOfMonth()}`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setRiderCountMonth(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getPassengerCountToday = async () => {
        try {
            const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&component=count&start_date=${getTodayDate()}&end_date=${getTodayDate()}`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setRiderCountToday(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    return (
        <RctCard>
            <RctCardContent>
                <div className="clearfix">
                    <div className="w-100">
                        <div className="d-flex justify-content-between w-100">
                            <h3 className="mb-15 fw-semi-bold"><IntlMessages id="widgets.passengers"/></h3>
                            {/*<div className="float-right hidden-md-down">*/}
                            {/*    <div className="featured-section-icon">*/}
                                    <i className="icon-user" style={{fontSize: '30px'}}></i>
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="d-flex">
                            <div className="mr-50">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.today"/></span>
                                <CountUp separator="," className="counter-point" start={0} end={riderCountToday} duration={5}
                                         useEasing={true}/>
                            </div>
                            <div className="mr-50">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.this month"/></span>
                                <CountUp
                                    separator=","
                                    className="counter-point"
                                    start={0}
                                    end={riderCountMonth}
                                    duration={5}
                                    useEasing={true}
                                />
                            </div>
                            <div className="">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.total"/></span>
                                <CountUp separator="," className="counter-point" start={0} end={riderCount} duration={5}
                                         useEasing={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </RctCardContent>
        </RctCard>
    )
};

export default VisitorAreaChart;
