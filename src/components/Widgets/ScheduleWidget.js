/**
 *  Schedule Widget
 */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { RctCardContent } from 'Components/RctCard';
import api from "../../environments/environment";
import {NotificationManager} from "react-notifications";
import {getTodayDate} from "Helpers/helpers";

const ScheduleWidget = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        getSchedulesCount()
    },[])

    const getSchedulesCount = async () => {
        try {
            const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=schedule&component=count&trip_date=${getTodayDate()}`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
               setCount(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    return (
        <div className="current-widget bg-primary">
            <RctCardContent>
                <div className="d-flex justify-content-between">
                    <div className="align-items-start">
                        <h3 className="mb-10">Today <br/> Schedules</h3>
                        <h2 className="mb-0"><CountUp start={0} end={count}/></h2>
                    </div>
                    <div className="align-items-end">
                        <i className="zmdi zmdi-time"></i>
                    </div>
                </div>
            </RctCardContent>
        </div>
    )
};

export default ScheduleWidget;
