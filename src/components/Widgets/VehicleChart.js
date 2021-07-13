/**
 * Vehicles Chart Widget
 */
import React, {useState, useEffect} from 'react';
import CountUp from 'react-countup';
import IntlMessages from 'Util/IntlMessages';
import { RctCard, RctCardContent } from 'Components/RctCard';
import axios from "axios";
import api from "../../environments/environment";
import {NotificationManager} from "react-notifications";

const VehicleChart = ({ data }) => {
    const [vehicleCount, setVehicleCount] = useState(0)
    const [vehicleCountAssigned, setVehicleCountAssigned] = useState(0)
    const [vehicleCountUnassigned, setVehicleCountUnassigned] = useState(0)

    useEffect(() => {
        getVehicleCount();
        getVehicleAssigned();
        getVehicleUnassigned()
    },[])
    const getVehicleCount = async () => {
        try {
            const res = await axios.get(`${api.vehicles}/v1.1/vehicles?component=count`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setVehicleCount(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getVehicleAssigned = async () => {
        try {
            const res = await axios.get(`${api.vehicles}/v1.1/vehicles?component=count&assign=1`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setVehicleCountAssigned(res.data.data.total ? res.data.data.total : 0)
            }
        } catch (err) {
        }
    }

    const getVehicleUnassigned = async () => {
        try {
            const res = await axios.get(`${api.vehicles}/v1.1/vehicles?component=count&assign=0`);
            if (res.data.status === 'error') {
                NotificationManager.error(res.data.msg);
            } else {
                setVehicleCountUnassigned(res.data.data.total ? res.data.data.total : 0)
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
                            <h3 className="mb-15 fw-semi-bold"><IntlMessages id="widgets.vehicles"/></h3>
                            {/*<div className="float-right hidden-md-down">*/}
                            {/*    <div className="featured-section-icon">*/}
                            <i className="zmdi zmdi-car" style={{fontSize: '40px'}}></i>
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="d-flex">
                            <div className="mr-50">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.assigned"/></span>
                                <CountUp separator="," className="counter-point" start={0} end={vehicleCountAssigned} duration={5}
                                         useEasing={true}/>
                            </div>
                            <div className="mr-50">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.unassigned"/></span>
                                <CountUp
                                    separator=","
                                    className="counter-point"
                                    start={0}
                                    end={vehicleCountUnassigned}
                                    duration={5}
                                    useEasing={true}
                                />
                            </div>
                            <div className="">
                                <span className="fs-14 d-block"><IntlMessages id="widgets.total"/></span>
                                <CountUp separator="," className="counter-point" start={0} end={vehicleCount} duration={5}
                                         useEasing={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </RctCardContent>
        </RctCard>
    )
};

export default VehicleChart;
