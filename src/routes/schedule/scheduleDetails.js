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
                                    className="pull-left"><strong>Ride Class</strong></span>{scheduleDetails?.ride_class}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ride Date</strong></span>{scheduleDetails?.ride_date}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ride Time</strong></span>{scheduleDetails?.ride_time}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ride Type</strong></span>{scheduleDetails?.ride_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Setup Type</strong></span>{scheduleDetails?.setup_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Payment Method</strong></span>{scheduleDetails?.payment_method}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ride Status</strong></span>
                                    <Badge color={scheduleDetails?.ride_status === 1 ? "success" : scheduleDetails?.ride_status === 2 ? 'danger' : 'warning'}>
                                        {scheduleDetails?.ride_status === 1 ? 'Accepted' : scheduleDetails?.ride_status === 2 ? 'Declined' : 'Pending'}
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
