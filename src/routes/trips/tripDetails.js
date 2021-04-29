import React, {useEffect, useState} from 'react';
import {Badge, Modal, ModalBody, ModalHeader} from 'reactstrap';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getFdtDetails} from "Actions/fdtActions";
import Spinner from "../../spinner/Spinner";
import {getTrips} from "Actions/tripAction";
import {getDriverByAuthId} from "Actions/driverAction";
import {Link} from "react-router-dom";



const TripDetails = ({getTrips, match, loading, trips, getDriverByAuthId, driver})=> {
    const [trip, setTrip] = useState({})
    const [isModal, setIsModal] = useState(false)
    const [riderDetails, setRiderDetails] = useState({});

useEffect(() => {
    getTrips();
}, [])

    useEffect(()=> {
        if (match.params.id && trips.length > 0){
            trips.map(trip => {
                if(trip._id == match.params.id) {
                   setTrip(trip)
                    getDriverByAuthId(trip.driver_id)
                }
            })
        }
    },[match.params.id, trips])


    console.log(trip, 'oooooooo')


    const getPosition = (id) => {
        if(id === 0) {
            return '-10px'
        }else if(id ===1) {
            return '-15px'
        }else if(id ===2) {
            return '-20px'
        }else if(id ===3) {
            return '-25px'
        }
    }



    return (
        <div>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Trip Details" />
            </Helmet>
            <PageTitleBar title={`Trip details`} match={match}  />
            {loading && <Spinner />}
            {!loading && <div className="row" style={{minHeight: '70vh'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <div className="d-flex align-items-center p-3">
                                <div className="scheduleHeader font-weight-bold">
                                    {trip._id}
                                </div>
                                <div style={{marginLeft: '50px'}}>
                                    {trip.ride_status}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="schedulePickup">
                                    Class
                                </div>
                                <div className="scheduleHeader mt-1">
                                    {trip.ride_class}
                                </div>
                                <div className="schedulePickup mt-4">
                                    Date
                                </div>
                                <div className="scheduleHeader mt-1">
                                    {new Date(trip.createdAt).toDateString()}
                                </div>
                                <div className="schedulePickup mt-4">
                                    Driver Name
                                </div>
                                <div className="scheduleHeader mt-1">
                                    <Link to={`/admin/drivers/${driver.id}`}>{driver?.firstName} {driver?.lastName}</Link>
                                </div>
                                <div className="schedulePickup mt-4">
                                    Riders
                                </div>
                                <div className="mt-3 d-flex">
                                    {trip?.riders?.length > 0 && trip.riders.map((rider, index) => (
                                            <img
                                                onClick={() => {
                                                    setRiderDetails(rider);
                                                    setIsModal(true)
                                                }}
                                                key={index}
                                                src={require('Assets/avatars/avatar.png')}
                                                // alt="user profile"
                                                className="img-fluid rounded-circle"
                                                width="32"
                                                height="32"
                                                style={{marginLeft: getPosition(index), cursor: 'pointer'}}
                                            />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
            <Modal isOpen={isModal} toggle={() => setIsModal(false)}>

                <ModalHeader toggle={() => setIsModal(false)}>
                    Rider Trip details
                </ModalHeader>
                <ModalBody>
                    <div className='row'>
                      <div className='col-6'>
                          <div className="schedulePickup">
                              Name
                          </div>
                          <div className="scheduleHeader mt-1">
                              {riderDetails?.name}
                          </div>
                      </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Phone
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.phone}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_address}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_address}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up Latitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_lat}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Pick up Longitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.start_lon}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off Latitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_lat}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Drop off Longitude
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_lon}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Start Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {new Date(riderDetails?.start_trip_at).toLocaleTimeString()}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                End Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {new Date(riderDetails?.end_trip_at).toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Estimated Fare
                            </div>
                            <div className="scheduleHeader mt-1">
                                ₦{riderDetails?.est_fare}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Fare
                            </div>
                            <div className="scheduleHeader mt-1">
                                ₦{riderDetails?.fare}
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Estimated Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.est_time}sec
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Time Spent
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.end_time}sec
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Waiting Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.waiting_time}sec
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                               Delay Time
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.delay_time}sec
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Number of Riders
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.rider}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Total Distance Covered
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.total_distance}km
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Class Type
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.class}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="schedulePickup">
                                Status
                            </div>
                            <div className="scheduleHeader mt-1">
                                {riderDetails?.status}
                            </div>
                        </div>
                    </div>
                </ModalBody>
                {/*<ModalFooter>*/}
                {/*    <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>*/}
                {/*</ModalFooter>*/}
            </Modal>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getTrips: () => dispatch(getTrips()),
        getDriverByAuthId: (id) => dispatch(getDriverByAuthId(id))
    };
}

const mapStateToProps = state => ({
    trips: state.trips.trips,
    driver: state.driver.driver,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(TripDetails)
