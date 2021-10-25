import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Badge, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import Button from "@material-ui/core/Button";
import { getStatus, getStatusColor } from "Helpers/helpers";
import { changeDriverStatus, changeDriverCategory } from "Actions/driverAction";
import { connect } from "react-redux";
import { assignVehicleOnProfile } from "Actions/vehicleAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import emailMessages from "Assets/data/email-messages/emailMessages";
import TableCell from "@material-ui/core/TableCell";
import moment from 'moment';


const DriverProfile = ({ driver, changeDriverStatus, changeDriverCategory, loadingStatus, vehicles, assignVehicle, vehicleDetails }) => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [addVehicleModal, setAddVehicleModal] = useState(false)
    const [driverCategory, setDriverCategory] = useState(driver?.driver_data?.driver_category)
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [vehicleData, setVehicleData] = useState({})
    const [argument, setArgument] = useState(null)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const inputEl = useRef(null);
    const [formData, setFormData] = useState({
        firstname: driver?.first_name, lastname: driver?.last_name, email: driver?.email, vehicle: ""
    });
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { vehicle } = formData;

    useEffect(() => {
        if (vehicle && vehicles.length > 0) {
            const vehicleValue = vehicles.find(element => element.vehicle_id === vehicle)
            setVehicleData(vehicleValue)
        }
    }, [vehicle])

    console.log(driver)

    const opnAddVehicleModal = () => {
        setAddVehicleModal(true)
    }

    const onAddVehicleModalClose = () => {
        setAddVehicleModal(false);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        onAddVehicleModalClose()
        await assignVehicle(vehicle, driver?.auth_id, driver, vehicleData, '5M')
    };


    const onAccept = () => {
        setTitle("Are you sure you want to accept driver")
        setMessage("This driver will be accepted on the platform.")
        setArgument(1)
        inputEl.current.open();
    }

    const onVerified = () => {
        if (driver?.driver_data?.license_id?.status ||
            !driver?.driver_data?.lasdri_id?.status ||
            driver?.driver_data?.lassra_id?.status ||
            driver?.driver_data?.nin_id?.status
        ) {
            NotificationManager.error("All IDs are not yet verified !");
        }
        else {
            setTitle("Are you sure you want to verify driver")
            setMessage("This driver will be verified on the platform.")
            setArgument(2)
            inputEl.current.open();
        }
    }

    const onApproved = () => {
        setTitle("Are you sure you want to approve driver")
        setMessage("This driver will be approved on the platform.")
        setArgument(3)
        inputEl.current.open();
    }
    const onTrained = () => {
        setTitle("Are you sure you want to confirm this driver trained")
        setMessage("This driver will be confirmed as trained on the platform.")
        setArgument(4)
        inputEl.current.open();
    }

    const onSuspend = () => {
        setTitle("Are you sure you want to suspend driver")
        setMessage("This driver will be inactive.")
        setArgument(5)
        inputEl.current.open();
    }

    const onReactivate = () => {
        setTitle("Are you sure you want to reactivate driver")
        setMessage("This driver will be active again.")
        setArgument(1)
        inputEl.current.open();
    }

    const handleCategorySubmit = (e) => {
        e.preventDefault()
        setCategoryModalOpen(false)
        setTitle("Are you sure you want to change this driver's category")
        setMessage("The driver's category will be changed")
        setArgument(6)
        inputEl.current.open();
    }



    const onConfirm = () => {
        if (argument === 1) {
            changeDriverStatus(driver?.auth_id, '1', driver, emailMessages.acceptMsg, 'Driver Reactivated')
        }
        if (argument === 2) {
            changeDriverStatus(driver?.auth_id, '2', driver, emailMessages.verifiedMessage, 'Driver Verified')
        }
        if (argument === 3) {
            changeDriverStatus(driver?.auth_id, '3', driver, emailMessages.approveMsg, "Driver Approved");
        }
        // if (argument === 4) {
        //     changeDriverStatus(driver?.auth_id, '4', driver, emailMessages.trainedMessage, 'Driver Training Confirmed')
        // }
        // if (argument === 5) {
        //     changeDriverStatus(driver?.auth_id, '5', driver, emailMessages.suspendMsg, 'Driver Suspended')
        // }
        if (argument === 6) {
            changeDriverCategory(driver?.auth_id, driverCategory, driver, emailMessages.categoryMsg[driverCategory], 'Category Changed')
        }
        inputEl.current.close();
    }

    return (
        <div className="row" style={{ fontSize: '0.8rem' }}>
            <div className="col-sm-6">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>DMS Id</strong></span>{driver?.driver_data?.dms_id}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>First name</strong></span>{driver?.first_name}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Last name</strong></span>{driver?.last_name}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Phone Number</strong></span>{driver?.phone_number}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Residential Address</strong></span>{driver?.home_address}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Education</strong></span>{driver?.education}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Email</strong></span>{driver.email}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>State of Origin</strong></span>{driver?.state}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Date of Birth</strong></span>{driver?.dob}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Next of Kin (Name)</strong></span>{driver?.driver_data?.next_kin?.name}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Next of Kin (Relationship)</strong></span>{driver?.driver_data?.next_kin?.relationship}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Blood Group</strong></span>{driver?.blood_group}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Eye Glasses</strong></span>{driver?.driver_data?.eye_glasses === 0 ? 'No' : 'Yes'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Facial Mark</strong></span>{driver?.driver_data?.facial_mark === 0 ? 'No' : 'Yes'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Disability</strong></span>{driver?.driver_data?.disability === 0 ? 'No' : 'Yes'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Bank Name</strong></span>{driver?.bank_name ? driver?.bank_name : 'NA'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Bank Account</strong></span>{driver?.driver_data?.bank_account ? driver?.driver_data?.bank_account : 'NA'}
                            </li>
                            {
                                // driver?.driver_data?.driver_status >= 1 &&
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Driver Category</strong></span>{driver?.driver_data?.driver_category} <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setCategoryModalOpen(true)} > Change </span>
                                </li>
                            }

                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Daily debt service Amt</strong></span>{driver?.driver_data?.payment_plan?.plan ? '₦' + driver?.driver_data?.payment_plan?.plan : 'NA'}
                            </li>
                            {/* <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Made First Payment</strong></span>
                                <Badge color={driver?.driver_data?.made_first_payment ? 'success' : 'danger'}>{driver?.driver_data?.made_first_payment ? 'Yes' : 'No'}</Badge>
                            </li> */}
                            <li className="list-group-item text-right">
                                <span
                                    className="pull-left"><strong>Driving License</strong>
                                </span>
                                {driver?.driver_data?.license_id?.value}
                                {
                                    driver?.driver_data?.license_id?.status ? <i className="ti-check ml-3" /> : <span className={`bg-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`} > Run Check </span>
                                }
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>LASDRI ID</strong></span>{driver?.driver_data?.lasdri_id?.value}
                                {
                                    driver?.driver_data?.lasdri_id?.status ? <i className="ti-check ml-3" /> : <span className={`bg-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`}> Run Check </span>
                                }
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>LASSRA ID</strong></span>{driver?.driver_data?.lassra_id?.value}
                                {
                                    driver?.driver_data?.lassra_id?.status ? <i className="ti-check ml-3" /> : <span className={`bg-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`} > Run Check </span>
                                }
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>NIN ID</strong></span>{driver?.driver_data?.nin_id?.value}
                                {
                                    driver?.driver_data?.nin_id?.status ? <i className="ti-check ml-3" /> : <span className={`bg-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`} > Run Check </span>
                                }
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Verification Payment Status</strong></span>{driver?.driver_data?.verification_payment?.status ? "Paid" : "Not Paid"}
                            </li>
                            {driver?.driver_data?.verification_payment?.status &&
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Verification Payment ID</strong></span>{driver?.driver_data?.verification_payment?.payment_id}
                                </li>
                            }
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>ASSET Payment Status</strong></span>{driver?.driver_data?.asset_payment?.status ? "Paid" : "Not Paid"}
                            </li>
                            {driver?.driver_data?.asset_payment?.status &&
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>ASSET Payment ID</strong></span>{driver?.driver_data?.asset_payment?.payment_id}
                                </li>
                            }
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong> Expiration Year</strong></span>{parseInt(moment().format('YYYY'), 10) + driver?.driver_data?.year_exp}
                            </li>
                            {(driver?.driver_data?.vehicle_id === vehicleDetails?.vehicle_id) &&
                                <>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Vehicle Plate No</strong></span><Link to={`/admin/vehicles/${vehicleDetails?.vehicle_id}`}>{vehicleDetails?.car_number_plate}</Link>
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Vehicle Modal</strong></span>{vehicleDetails?.car_make}
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>Vehicle Year</strong></span>{vehicleDetails?.car_model}
                                    </li>
                                    {/*<li className="list-group-item text-right"><span*/}
                                    {/*    className="pull-left"><strong>Vehicle Description</strong></span>{vehicleDetails?.car_desc}*/}
                                    {/*</li>*/}
                                </>
                            }
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Status</strong></span><Badge color={getStatusColor(driver?.driver_data?.driver_status)}>{getStatus(driver.driver_data?.driver_status)}</Badge>

                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>App Status</strong></span><Badge color={driver?.driver_data?.online ? 'success' : 'danger'}>{driver?.driver_data?.online ? 'Online' : 'Offline'}</Badge>

                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Driver's Location on Map</strong></span><button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/map`}><i className="ti-eye" /></Link></button>

                            </li>
                            <li className="list-group-item">
                                <span className="pull-left d-flex">
                                    {/* {driver?.driver_data?.driver_status === 0 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onAccept()} className="bg-primary mt-3 text-white">Accept Driver</Button>
                                        </div>} */}
                                    {driver?.driver_data?.driver_status === 1 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onVerified()} className="bg-success mt-3 text-white">Verify Driver</Button>
                                        </div>}
                                    {driver?.driver_data?.driver_status === 2 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onApproved()} className="bg-success mt-3 text-white">Approve Driver</Button>
                                        </div>}
                                    {driver?.driver_data?.driver_status === 3 &&
                                        <div className='text-center d-flex'>
                                            {/* <Button disabled={loadingStatus} onClick={() => onTrained()} className="bg-warning mt-3 text-white mr-2">Confirm Driver Training</Button> */}
                                            <Button disabled={loadingStatus} onClick={() => onSuspend()} className="bg-danger mt-3 text-white ">Suspend Driver</Button>
                                        </div>}
                                    {/* {driver?.driver_data?.driver_status === 4 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onSuspend()} className="bg-danger mt-3 text-white">Suspend Driver</Button>
                                        </div>}
                                    {driver?.driver_data?.driver_status === 5 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onReactivate()} className="bg-success mt-3 text-white">Reactivate Driver</Button>
                                        </div>} */}
                                    {driver?.driver_data?.driver_status === 3 && !driver.driver_data?.vehicle_id && (driver?.driver_data?.receipt_url || driver?.driver_data?.made_first_payment) &&
                                        <div className='text-center ml-2'>
                                            <Button disabled={loadingStatus} onClick={() => { opnAddVehicleModal() }} className="bg-warning mt-3 text-white">Assign Vehicle</Button>
                                        </div>}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*<div className="col-sm-6 px-4">*/}
            {/*    <div className='text-center px-3 h-50'>*/}
            {/*       <div className="font-weight-bold">Payment Receipt</div>*/}
            {/*        <img*/}
            {/*            onClick={ () => openImageViewer(0) }*/}
            {/*            src={driver?.driver_data?.receipt_url}*/}
            {/*            alt="receipt"*/}
            {/*            className="img-fluid mt-2"*/}
            {/*            // width="100%"*/}
            {/*            // height="10%"*/}
            {/*            style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer'}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Modal size='lg' isOpen={isViewerOpen} toggle={() => setIsViewerOpen(!isViewerOpen)}>
                <ModalHeader toggle={() => setIsViewerOpen(!isViewerOpen)}>
                    Receipt Preview
                </ModalHeader>
                <img
                    src={driver?.driver_data?.receipt_url}
                    alt="receipt"
                />
            </Modal>
            {/* modal that changes the driver category  */}
            <Modal size='sm' isOpen={categoryModalOpen} toggle={() => setCategoryModalOpen(!categoryModalOpen)}>
                <ModalHeader toggle={() => setCategoryModalOpen(!categoryModalOpen)}>
                    Change Driver Category
                </ModalHeader>
                <ModalBody >
                    <Form onSubmit={handleCategorySubmit}>
                        <div className="px-3"> <Input type="radio" name="driver_category" value="social" checked={driverCategory === "social"} onChange={() => setDriverCategory("social")} /> Social Driver</div>
                        <div className="px-3"><Input type="radio" name="driver_category" value="commercial" checked={driverCategory === "commercial"} onChange={() => setDriverCategory("commercial")} /> Commercial Driver</div>
                        <div className="mt-2 text-right"><button className=" btn rounded btn-primary">Change</button></div>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={addVehicleModal} toggle={() => onAddVehicleModalClose()}>
                <ModalHeader toggle={() => onAddVehicleModalClose()}>
                    Assign Vehicle
                </ModalHeader>
                <ModalBody>
                    <div>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label for="userName">First Name</Label>
                                <Input
                                    onChange={onChange}
                                    readOnly={true}
                                    type="text"
                                    name="firstname"
                                    value={driver?.first_name}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userName">Last Name</Label>
                                <Input
                                    onChange={onChange}
                                    readOnly={true}
                                    type="text"
                                    name="lastname"
                                    value={driver?.last_name}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userEmail">Email</Label>
                                <Input
                                    onChange={onChange}
                                    type="email"
                                    name="email"
                                    readOnly={true}
                                    value={driver?.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Vehicles</Label>
                                <Input type="select" name="vehicle" onChange={onChange} value={vehicle} required={true}>
                                    <option value="">Select Vehicle</option>
                                    {vehicles && vehicles.map(vehicle => (
                                        <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>{vehicle.car_number_plate}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <ModalFooter>
                                <Button type="submit" variant="contained" className="text-white btn-success">Assign</Button>
                            </ModalFooter>
                        </Form>
                    </div>
                </ModalBody>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title={title}
                message={message}
                onConfirm={onConfirm}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        changeDriverStatus: (auth_id, driver_status, driverData, message_type, subject) => dispatch(changeDriverStatus(auth_id, driver_status, driverData, message_type, subject)),
        changeDriverCategory: (auth_id, category, driverData, message_type, subject) => dispatch(changeDriverCategory(auth_id, category, driverData, message_type, subject)),
        assignVehicle: (vehicle_id, driver_auth_id, driverData, vehicleData, message_type) => dispatch(assignVehicleOnProfile(vehicle_id, driver_auth_id, driverData, vehicleData, message_type)),
    };
}

const mapStateToProps = state => ({
    loadingStatus: state.loading.loadingStatus,
    vehicles: state.vehicle.vehicles,
    vehicleDetails: state.vehicle.vehicleDetails,
});


export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile)
