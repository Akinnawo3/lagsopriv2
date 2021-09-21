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
                    {fdtDetails?.ride_data?.length > 0 && fdtDetails.ride_data.map((data, index) => (
                        <div key={index}  className='px-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Date
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.ride_date}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        Time
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.ride_time}
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
                                        Ride Type
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data?.setup_type}
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        Payment Method
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.payment_method}
                                    </div>
                                </div>
                            </div>


                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="schedulePickup">
                                        Status
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        <Badge color={data?.ride_status === 1 ? "success" : data?.ride_status === 2 ? 'danger' : 'warning'}>
                                            {data?.ride_status === 1 ? 'Accepted' : data?.ride_status === 2 ? 'Declined' : 'Pending'}
                                        </Badge>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="schedulePickup mt-1">
                                        Ride Class
                                    </div>
                                    <div className="scheduleHeader mt-1">
                                        {data.ride_class}
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
