import React, {useEffect, useState} from 'react';
import { Badge } from 'reactstrap';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getFdtDetails} from "Actions/fdtActions";
import Spinner from "../../spinner/Spinner";



const FdtDetails = ({getFdtDetails, match, fdtDetails, loading})=> {



    useEffect(()=> {
        if (match.params.id){
            getFdtDetails(match.params.id)
        }
    },[match.params.id])


    const getStatus = (id) => {
        if(id == 0) {
            return (
                <Badge color="warning">Pending</Badge>
            )
        }else if(id == 1) {
            return (
                <Badge color="Success">Completed</Badge>
            )
        }else if(id == 2) {
            return (
                <Badge color="danger">Cancelled</Badge>
            )
        }else {
            return (
                ''
            )
        }
    }

    const getClassTrip = (id) => {
        if(id == 1) {
            return (
               'Class A'
            )
        }else if(id == 2) {
            return (
               'Class B'
            )
        }else if(id == 3) {
            return (
                'Class C'
            )
        }else {
            return (
                'Class D'
            )
        }
    }

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
                <meta name="description" content="Ticket Details" />
            </Helmet>
            <PageTitleBar title={`Fdt details`} match={match}  />
            {loading && <Spinner />}
            {!loading && <div className="row" style={{minHeight: '70vh'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <div className="d-flex align-items-center p-3">
                                <div className="scheduleHeader font-weight-bold">
                                    Trip Details
                                </div>
                                <div style={{marginLeft: '50px'}}>
                                    {getStatus(fdtDetails.fdtStatus)}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="scheduleHeader">
                                    {fdtDetails['dates']} <span className="ml-3">{getClassTrip(fdtDetails.classTrip)}</span>
                                </div>

                                <div className="schedulePickup mt-4">
                                    Pick up location
                                </div>
                                <div className="scheduleHeader mt-3">
                                    {fdtDetails.pickupAddress}
                                </div>
                                <div className="schedulePickup mt-4">
                                    Drop off location
                                </div>
                                <div className="scheduleHeader mt-3">
                                    {fdtDetails.dropoffAddress}
                                </div>
                                <div className="schedulePickup mt-4">
                                    Riders
                                </div>
                                <div className="mt-3">
                                    {fdtDetails.joinedBy &&
                                    <div className='d-flex'>
                                            <img
                                                src={require('Assets/avatars/avatar.png')}
                                                // alt="user profile"
                                                className="img-fluid rounded-circle"
                                                width="32"
                                                height="32"
                                            />
                                        {Object.keys(JSON.parse(fdtDetails.joinedBy)).map((record, index) => (
                                            // <div  key={record}>
                                                <img  key={record}
                                                    src={require('Assets/avatars/avatar.png')}
                                                    // alt="user profile"
                                                    className="img-fluid rounded-circle"
                                                    width="32"
                                                    height="32"
                                                    style={{marginLeft: getPosition(index)}}
                                                />
                                            // </div>
                                        ))}
                                    </div>}
                                    {!fdtDetails.joinedBy && <img
                                        src={require('Assets/avatars/avatar.png')}
                                        // alt="user profile"
                                        className="img-fluid rounded-circle"
                                        width="32"
                                        height="32"
                                    />}
                                    {/*<img*/}
                                    {/*    src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 1.png')}*/}
                                    {/*    // alt="user profile"*/}
                                    {/*    className="img-fluid rounded-circle"*/}
                                    {/*    width="32"*/}
                                    {/*    height="32"*/}
                                    {/*/>*/}
                                    {/*<img*/}
                                    {/*    src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}*/}
                                    {/*    // alt="user profile"*/}
                                    {/*    className="img-fluid rounded-circle"*/}
                                    {/*    width="32"*/}
                                    {/*    height="32"*/}
                                    {/*    style={{marginLeft: '-10px'}}*/}
                                    {/*/>*/}
                                    {/*<img*/}
                                    {/*    src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}*/}
                                    {/*    // alt="user profile"*/}
                                    {/*    className="img-fluid rounded-circle"*/}
                                    {/*    width="32"*/}
                                    {/*    height="32"*/}
                                    {/*    style={{marginLeft: '-10px'}}*/}
                                    {/*/>*/}
                                    {/*<img*/}
                                    {/*    src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}*/}
                                    {/*    // alt="user profile"*/}
                                    {/*    className="img-fluid rounded-circle"*/}
                                    {/*    width="32"*/}
                                    {/*    height="32"*/}
                                    {/*    style={{marginLeft: '-10px'}}*/}
                                    {/*/>*/}
                                    <div className="d-flex align-items-center justify-content-between">
                                        {fdtDetails.joinedBy ?
                                            <div className="scheduleHeader mt-4">
                                                {Object.keys(JSON.parse(fdtDetails.joinedBy)).length + 1} of <span className="schedulePickup">{fdtDetails.classTrip}</span>
                                            </div>:
                                            <div className="scheduleHeader mt-4">
                                                1 of <span className="schedulePickup">{fdtDetails.classTrip}</span>
                                            </div>}
                                        <Button type="button" variant="contained" className="text-white btn-primary">Trigger trip suggestion</Button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getFdtDetails: (id) => dispatch(getFdtDetails(id)),
    };
}

const mapStateToProps = state => ({
    fdtDetails: state.fdt.fdtDetails,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(FdtDetails)
