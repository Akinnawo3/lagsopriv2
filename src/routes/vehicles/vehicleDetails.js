import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {Link} from "react-router-dom";
import {getVehicle, revokeVehicle} from "Actions/vehicleAction";
import {Badge} from "reactstrap";
import Button from "@material-ui/core/Button";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";



const VehicleDetails = ({getVehicle, match, loading, vehicleDetails, driverDetails, loadingStatus, revokeVehicle})=> {
    const inputEl = useRef(null);
    useEffect(()=> {
        getVehicle(match.params.id, true)
    },[match.params.id])

    const opnRevokeVehicleModal = () => {
        inputEl.current.open();
    }


    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Vehicle Details" />
            </Helmet>
            <PageTitleBar title={`Vehicle details`} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Id</strong></span>{vehicleDetails?.vehicle_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Plate No</strong></span>{vehicleDetails?.car_number_plate}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Modal</strong></span>{vehicleDetails?.car_make}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Vehicle Year</strong></span>{vehicleDetails?.car_model}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Color</strong></span>{vehicleDetails?.car_color}
                                </li>
                                {/*<li className="list-group-item text-right"><span*/}
                                {/*    className="pull-left"><strong>Vehicle Description</strong></span>{vehicleDetails?.car_desc}*/}
                                {/*</li>*/}
                                {(driverDetails?.driver_data?.vehicle_id === vehicleDetails?.vehicle_id) &&
                                <>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Driver Name</strong></span><Link to={`/admin/drivers/${driverDetails?.auth_id}`}>{driverDetails?.first_name} {driverDetails.last_name}</Link>
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Driver Email</strong></span>{driverDetails?.email}
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Driver Phone Number</strong></span>{driverDetails?.phone_number}
                                    </li>
                                </>
                                }
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Status</strong></span><Badge color={vehicleDetails?.assigned ? 'success': 'danger'}>{vehicleDetails?.assigned ? 'Assigned' : 'Unassigned'}</Badge>
                                </li>
                                {vehicleDetails?.assigned &&
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><Button disabled={loadingStatus} onClick={()=> {opnRevokeVehicleModal()}} className="bg-danger mt-3 text-white">Revoke</Button></span>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To revoke vehicle assignment?"
                message="This will unassigned vehicle from driver."
                onConfirm={() => {
                    revokeVehicle(vehicleDetails?.vehicle_id);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getVehicle: (vehicle_id, spinner) => dispatch(getVehicle(vehicle_id, spinner)),
        revokeVehicle: (vehicle_id) => dispatch(revokeVehicle(vehicle_id)),
    };
}

const mapStateToProps = state => ({
    vehicleDetails: state.vehicle.vehicleDetails,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus,
    driverDetails: state.driver.driver,



});

export default connect( mapStateToProps, mapDispatchToProps)(VehicleDetails)
