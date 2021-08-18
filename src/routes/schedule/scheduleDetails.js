import React, {useEffect, useState} from 'react';
import {Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {Link} from "react-router-dom";
import {getScheduleDetails} from "Actions/fdtActions";



const ScheduleDetails = ({getScheduleDetails, match, loading, scheduleDetails})=> {
    const [isModal, setIsModal] = useState(false)
    const [riderDetails, setRiderDetails] = useState({});

    useEffect(()=> {
        getScheduleDetails(match.params.id)
    },[match.params.id])





    // auth_id: "60d31ac644159dc5dd1dad1b"
    // trip_scheduleDetails: Array(3)
    // 0:
    // end_address: "40 Oladipo Bateye Road, Ikeja, Nigeria"
    // end_lat: 6.5744221
    // end_lon: 3.3458747
    // start_address: "Bridgegate Estate, Iberekodo Street, Lekki, Nigeria"
    // start_lat: 6.446528
    // start_lon: 3.5177175
    // trip_date: "2021-07-05"
    // trip_status: 0
    // trip_time: "06:00"
    // __proto__: Object
    // 1: {trip_date: "2021-07-03", trip_status: 0, start_address: "Ejim Apartments, Prince Ibrahim Eletu Avenue, Lagos, Nigeria", start_lon: 3.5092497, start_lat: 6.442997099999999, …}
    // 2: {trip_date: "2021-07-04", trip_status: 0, start_address: "Bridgegate Estate, Iberekodo Street, Lekki, Nigeria", start_lon: 3.5177175, start_lat: 6.446528, …}
    // length: 3
    // __proto__: Array(0)
    // users:
    //     avatar: ""
    // blood_group: ""
    // dob: ""
    // education: ""
    // email: "fike.odulaja@gmail.com"
    // email_status: 0
    // first_name: "Fike"
    // gender: "female"
    // home_address: "Bridgegate Estate, Iberekodo Street, Lekki, Nigeria"
    // home_area: "a"
    // home_coordinate:
    //     latitude: 6.446528
    // longitude: 3.5177175
    // __proto__: Object
    // last_name: "Odulaja"
    // phone_number: "09029427239"
    // phone_status: 0
    // referer: ""
    // ride_partner: "all"
    // state: ""
    // trip_notification: 1
    // update_count: 1
    // user_type: "rider"
    // work_address: "40 Oladipo Bateye Road, Ikeja, Nigeria"
    // work_area: "i"
    // work_coordinate: {}
    //

    // end_address: "Ijanikin Boarding School, Lagos, Nigeria"
    // end_lat: 6.447809299999999
    // end_lon: 3.4723495
    // fdt_id: "60e4302d194049159fe0cff6"
    // start_address: "Lekki Phase 1, Lekki, Nigeria"
    // start_lat: 6.488620999999999
    // start_lon: 3.1428341
    // trip_alert: 0
    // trip_class: "B"
    // trip_date: "2021-07-07"
    // trip_schedule: "2021-07-07T01:30:00.000Z"
    // trip_status: 0
    // trip_time: "01:30"
    // trip_type: "schedule"

    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Schedule Details" />
            </Helmet>
            <PageTitleBar title={`Schedule details`} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Name</strong></span><Link to={`/admin/passengers/${scheduleDetails?.auth_id}`}>{scheduleDetails?.users?.first_name} {scheduleDetails?.users?.last_name} </Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Email</strong></span>{scheduleDetails?.users?.email}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Phone Number</strong></span>{scheduleDetails?.users?.phone_number}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Start Address</strong></span>{scheduleDetails?.start_address}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>End Address</strong></span>{scheduleDetails?.end_address}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Start Latitude</strong></span>{scheduleDetails?.start_lat}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>End Latitude</strong></span>{scheduleDetails?.end_lat}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Start Longitude</strong></span>{scheduleDetails?.start_lon}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>End Longitude</strong></span>{scheduleDetails?.end_lon}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Class</strong></span>{scheduleDetails?.trip_class}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Date</strong></span>{scheduleDetails?.trip_date}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Time</strong></span>{scheduleDetails?.trip_time}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Type</strong></span>{scheduleDetails?.trip_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Status</strong></span>
                                    <Badge color={scheduleDetails?.trip_status === 1 ? "success" : scheduleDetails?.trip_status === 2 ? 'danger' : 'warning'}>
                                        {scheduleDetails?.trip_status === 1 ? 'Accepted' : scheduleDetails?.trip_status === 2 ? 'Declined' : 'Pending'}
                                    </Badge>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getScheduleDetails: (auth_id) => dispatch(getScheduleDetails(auth_id)),
    };
}

const mapStateToProps = state => ({
    scheduleDetails: state.fdt.scheduleDetails,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(ScheduleDetails)
