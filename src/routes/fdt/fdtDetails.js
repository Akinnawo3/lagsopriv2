import React, {useEffect, useState} from 'react';
import {Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {formatTime} from "Helpers/helpers";
import {Link} from "react-router-dom";
import {getFdtDetails} from "Actions/fdtActions";



const FdtDetails = ({getFdtDetails, match, loading, fdtDetails})=> {
    const [isModal, setIsModal] = useState(false)
    const [riderDetails, setRiderDetails] = useState({});

    useEffect(()=> {
        getFdtDetails(match.params.id)
    },[match.params.id])


    const viewRiderDetails = async (data) => {
        await  setRiderDetails(data);
        setIsModal(true)
    }

    console.log(fdtDetails, 'ddd')



    // auth_id: "60d31ac644159dc5dd1dad1b"
    // trip_data: Array(3)
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



    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Fdt Details" />
            </Helmet>
            <PageTitleBar title={`Fdt details`} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Name</strong></span><Link to={`/admin/passengers/${fdtDetails?.auth_id}`}>{fdtDetails?.users?.first_name} {fdtDetails?.users?.last_name} </Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Email</strong></span>{fdtDetails?.users?.email}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Phone Number</strong></span>{fdtDetails?.users?.phone_number}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Home Address</strong></span>{fdtDetails?.users?.home_address}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Work Address</strong></span>{fdtDetails?.users?.work_address}
                                </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Trip Date(s)</strong></span>
                                        <button onClick={() => viewRiderDetails()} type="button" className="rct-link-btn text-primary" title="view details"><i className="ti-eye"/></button>

                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
            <Modal size='lg' isOpen={isModal} toggle={() => setIsModal(false)}>

                <ModalHeader toggle={() => setIsModal(false)}>
                    Fdt Trip details
                </ModalHeader>
                <ModalBody>
                    {fdtDetails?.trip_data?.length > 0 && fdtDetails.trip_data.map((data, index) => (
                        <div key={index}  className='px-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Date
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.trip_date}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        Time
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.trip_time}
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Start Address
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.start_address}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        End Address
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.end_address}
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Start Latitude
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.start_lat}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        End Latitude
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.end_lat}
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Start Longitude
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.start_lon}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        End Longitude
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.end_lon}
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Status
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        <Badge color={data?.trip_status === 1 ? "success" : data?.trip_status === 2 ? 'danger' : 'warning'}>
                                                   {data?.trip_status === 1 ? 'Completed' : data?.trip_status === 2 ? 'Cancelled' : 'Pending'}
                                                  </Badge>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        Trip Fare
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.trip_fare}
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}

                </ModalBody>
            </Modal>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getFdtDetails: (auth_id) => dispatch(getFdtDetails(auth_id)),
    };
}

const mapStateToProps = state => ({
    fdtDetails: state.fdt.fdtDetails,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(FdtDetails)
