import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Badge,
  ModalHeader,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
} from "reactstrap";
import Button from "@material-ui/core/Button";
import { getStatus, getStatusColor, idVerificationType } from "Helpers/helpers";
import {
  changeDriverStatus,
  changeDriverCategory,
  verifyID,
} from "Actions/driverAction";
import { getCustomerCare } from "Actions/customerCareAction";
import { connect } from "react-redux";
import { assignVehicleOnProfile, getVehicle } from "Actions/vehicleAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import emailMessages from "Assets/data/email-messages/emailMessages";
import TableCell from "@material-ui/core/TableCell";
import moment from "moment";
import suspensionReasonsList from "../../../assets/data/suspension-reasons/suspensionReasonsList";

const DriverProfile = ({
  driver,
  changeDriverStatus,
  changeDriverCategory,
  verifyID,
  loadingStatus,
  vehicles,
  assignVehicle,
  vehicleDetails,
  getVehicle,
  getCustomerCare,
  customerCareNumbers,
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [addVehicleModal, setAddVehicleModal] = useState(false);
  const [idVerificationModalOpen, setIdVerificationModalOpen] = useState(false);
  const [idType, setIdType] = useState("");
  const [driverCategory, setDriverCategory] = useState(
    driver?.driver_data?.driver_category
  );
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [suspensionReasonsModalOpen, setSuspensionReasonsModalOpen] =
    useState(false);
  const [vehicleData, setVehicleData] = useState({});
  const [argument, setArgument] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [suspensionReasons, setSuspensionReasons] = useState([]);
  const inputEl = useRef(null);
  const [formData, setFormData] = useState({
    firstname: driver?.first_name,
    lastname: driver?.last_name,
    email: driver?.email,
    vehicle: "",
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { vehicle } = formData;

  useEffect(() => {
    getCustomerCare();
    if (vehicle && vehicles.length > 0) {
      const vehicleValue = vehicles.find(
        (element) => element.vehicle_id === vehicle
      );
      setVehicleData(vehicleValue);
    }
  }, [vehicle]);


  const opnAddVehicleModal = () => {
    setAddVehicleModal(true);
  };

  const onAddVehicleModalClose = () => {
    setAddVehicleModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    onAddVehicleModalClose();
    await assignVehicle(vehicle, driver?.auth_id, driver, vehicleData, "5M");
    await changeDriverStatus(
      driver?.auth_id,
      "4",
      driver,
      emailMessages.approveMsg({
        firstName: driver?.first_name,
        vehicleDetails: vehicleData,
      }),
      "Driver Approved"
    );
  };
  const onAccept = () => {
    setTitle("Are you sure you want to accept driver");
    setMessage("This driver will be accepted on the platform.");
    setArgument(1);
    inputEl.current.open();
  };
  const onVerified = () => {
    // if (driver?.driver_data?.license_id?.status ||
    //     !driver?.driver_data?.lasdri_id?.status ||
    //     driver?.driver_data?.lassra_id?.status ||
    //     driver?.driver_data?.nin_id?.status
    // ) {
    //     NotificationManager.error("All IDs are not yet verified !");
    // }
    // else {
    setTitle("Are you sure you want to verify driver");
    setMessage("This driver will be verified on the platform.");
    setArgument(2);
    inputEl.current.open();
    // }
  };
  const onTrained = () => {
    setTitle("Are you sure you want to confirm this driver trained");
    setMessage("This driver will be confirmed as trained on the platform.");
    setArgument(3);
    inputEl.current.open();
  };

  const onApproved = () => {
    if (!driver.driver_data?.vehicle_id) {
      NotificationManager.error(
        "A vehicle must be assigned to the driver before approval"
      );
    } else {
      setTitle("Are you sure you want to approve driver");
      setMessage("This driver will be approved on the platform.");
      setArgument(4);
      inputEl.current.open();
    }
  };
  const onSuspend = (e) => {
    e.preventDefault();
    if (!suspensionReasons.length) {
      NotificationManager.error("State reasons for suspension");
    } else {
      setSuspensionReasonsModalOpen(false);
      setTitle("Are you sure you want to suspend driver");
      setMessage("This driver will be inactive.");
      setArgument(5);
      inputEl.current.open();
    }
  };
  const onReactivate = () => {
    setTitle("Are you sure you want to reactivate driver");
    setMessage("This driver will be active again.");
    setArgument(4);
    inputEl.current.open();
  };
  const handleCategorySubmit = (e) => {
    e.preventDefault();
    setCategoryModalOpen(false);
    setTitle("Are you sure you want to change this driver's category");
    setMessage("The driver's category will be changed");
    setArgument(6);
    inputEl.current.open();
  };
  const triggerIdVerifcation = (type) => {
    setIdType(type);
    setIdVerificationModalOpen(true);
  };
  const verifyId = (type) => {
    setIdVerificationModalOpen(false);
    setTitle(
      `Are you sure you want to verify this Driver's ${idVerificationType(
        idType
      )}`
    );
    setMessage(`The driver's ${idVerificationType(idType)} will be verified`);
    setArgument(7);
    inputEl.current.open();
  };
  const handleReasonClick = (e) => {
    if (e.target.checked) {
      setSuspensionReasons([...suspensionReasons, e.target.value]);
    } else {
      const removeReason = suspensionReasons.filter(
        (item) => item === e.target.value
      );
      setSuspensionReasons(removeReason);
    }
  };
  const onConfirm = () => {
    if (argument === 1) {
      changeDriverStatus(
        driver?.auth_id,
        "1",
        driver,
        emailMessages.acceptMsg,
        "Driver Reactivated"
      );
    }
    if (argument === 2) {
      changeDriverStatus(
        driver?.auth_id,
        "2",
        driver,
        emailMessages.verifiedMessage,
        "Driver Verified"
      );
    }
    if (argument === 3) {
      changeDriverStatus(
        driver?.auth_id,
        "3",
        driver,
        emailMessages.trainedMessage,
        "Driver Traning Confirmed"
      );
    }
    if (argument === 4) {
      changeDriverStatus(
        driver?.auth_id,
        "4",
        driver,
        emailMessages.approveMsg,
        "Driver Activated"
      );
    }
    if (argument === 5) {
      changeDriverStatus(
        driver?.auth_id,
        "5",
        driver,
        emailMessages.suspendMsg(suspensionReasons),
        "Driver Suspended"
      );
    }
    if (argument === 6) {
      changeDriverCategory(
        driver?.auth_id,
        driverCategory,
        driver,
        "Category Changed"
      );
    }
    if (argument === 7) {
      verifyID(driver?.auth_id, "1", idType);
    }
    inputEl.current.close();
  };
  return (
    <div className="row" style={{ fontSize: "0.8rem" }}>
      <div className="col-sm-10 col-lg-5">
        <div className="tab-content">
          <div className="tab-pane active" id="home">
            <ul className="list-group">
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>DMS Id</strong>
                </span>
                {driver?.driver_data?.dms_id}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>First name</strong>
                </span>
                {driver?.first_name}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Last name</strong>
                </span>
                {driver?.last_name}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Phone Number</strong>
                </span>
                {driver?.phone_number}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Residential Address</strong>
                </span>
                {driver?.home_address}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Education</strong>
                </span>
                {driver?.education}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Email</strong>
                </span>
                {driver.email}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>State of Origin</strong>
                </span>
                {driver?.state}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Date of Birth</strong>
                </span>
                {driver?.dob}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Next of Kin (Name)</strong>
                </span>
                {driver?.driver_data?.next_kin?.name}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Next of Kin (Relationship)</strong>
                </span>
                {driver?.driver_data?.next_kin?.relationship}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Blood Group</strong>
                </span>
                {driver?.blood_group}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Eye Glasses</strong>
                </span>
                {driver?.driver_data?.eye_glasses === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Facial Mark</strong>
                </span>
                {driver?.driver_data?.facial_mark === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Disability</strong>
                </span>
                {driver?.driver_data?.disability === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Bank Name</strong>
                </span>
                {driver?.bank_name ? driver?.bank_name : "NA"}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Bank Account</strong>
                </span>
                {driver?.driver_data?.bank_account
                  ? driver?.driver_data?.bank_account
                  : "NA"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-10 col-lg-5 offset-lg-1">
        <div className="tab-content">
          <div className="tab-pane active" id="home">
            <ul className="list-group">
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Driver Category</strong>
                </span>
                {driver?.driver_data?.driver_category}
                {driver?.driver_data?.driver_status < 2 && (
                  <span
                    className="bg-primary rounded fw-bold p-2 ml-3 text-white"
                    onClick={() => setCategoryModalOpen(true)}
                  >
                    Change
                  </span>
                )}
              </li>

              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Daily debt service Amt</strong>
                </span>
                {driver?.driver_data?.payment_plan?.plan
                  ? "₦" + driver?.driver_data?.payment_plan?.plan
                  : "NA"}
              </li>
              {/* <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Made First Payment</strong></span>
                                <Badge color={driver?.driver_data?.made_first_payment ? 'success' : 'danger'}>{driver?.driver_data?.made_first_payment ? 'Yes' : 'No'}</Badge>
                            </li> */}
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Driving License</strong>
                </span>
                {driver?.driver_data?.license_id?.value}
                {driver?.driver_data?.license_id?.status ? (
                  <i className="ti-check ml-3" />
                ) : (
                  <Button
                    className={`btn-warning rounded fw-bold p-2 ml-3 ${
                      driver?.driver_data?.driver_status > 1 && "d-none"
                    }`}
                    onClick={() =>
                      driver?.driver_data?.license_id?.value
                        ? triggerIdVerifcation("drivers_license")
                        : NotificationManager.error("No provided ID number")
                    }
                  >
                    Run Check
                  </Button>
                )}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>LASDRI ID</strong>
                </span>
                {driver?.driver_data?.lasdri_id?.value === driver?.phone_number
                  ? ""
                  : driver?.driver_data?.lasdri_id?.value}
                {driver?.driver_data?.lasdri_id?.status ? (
                  <i className="ti-check ml-3" />
                ) : (
                  <Button
                    className={`btn-warning rounded fw-bold p-2 ml-3 ${
                      driver?.driver_data?.driver_status > 1 && "d-none"
                    }`}
                    onClick={() =>
                      driver?.driver_data?.lasdri_id?.value !==
                      driver?.phone_number
                        ? triggerIdVerifcation("lasdri")
                        : NotificationManager.error("No provided ID number")
                    }
                  >
                    Run Check
                  </Button>
                )}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>LASSRA ID</strong>
                </span>
                {driver?.driver_data?.lassra_id?.value === driver?.phone_number
                  ? ""
                  : driver?.driver_data?.lassra_id?.value}
                {driver?.driver_data?.lassra_id?.status ? (
                  <i className="ti-check ml-3" />
                ) : (
                  <Button
                    className={`btn-warning rounded fw-bold p-2 ml-3 ${
                      driver?.driver_data?.driver_status > 1 && "d-none"
                    }`}
                    onClick={() =>
                      driver?.driver_data?.lassra_id?.value !==
                      driver?.phone_number
                        ? triggerIdVerifcation("lassra")
                        : NotificationManager.error("No provided ID number")
                    }
                  >
                    Run Check
                  </Button>
                )}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>NIN ID</strong>
                </span>
                {driver?.driver_data?.nin_id?.value}
                {driver?.driver_data?.nin_id?.status ? (
                  <i className="ti-check ml-3" />
                ) : (
                  <Button
                    className={`btn-warning rounded fw-bold p-2 ml-3 ${
                      driver?.driver_data?.driver_status > 1 && "d-none"
                    }`}
                    onClick={() =>
                      driver?.driver_data?.nin_id?.value
                        ? triggerIdVerifcation("nin")
                        : NotificationManager.error("No provided ID number")
                    }
                  >
                    Run Check
                  </Button>
                )}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Verification Payment Status</strong>
                </span>
                {driver?.driver_data?.verification_payment?.status
                  ? "Paid"
                  : "Not Paid"}
              </li>
              {driver?.driver_data?.verification_payment?.status && (
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Verification Payment ID</strong>
                  </span>
                  {driver?.driver_data?.verification_payment?.payment_id}
                </li>
              )}
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>One-off Payment Amount</strong>
                </span>
                {driver?.driver_data?.driver_category === "social"
                  ? `# ${customerCareNumbers.soc_driver_fee}`
                  : `# ${customerCareNumbers.com_driver_fee}`}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>One-off Payment</strong>
                </span>
                {driver?.driver_data?.asset_payment?.status
                  ? "Paid"
                  : "Not Paid"}
              </li>
              {driver?.driver_data?.asset_payment?.status && (
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>One-off Payment ID</strong>
                  </span>
                  {driver?.driver_data?.asset_payment?.payment_id}
                </li>
              )}
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong> Years of Experience</strong>
                </span>
                {driver?.driver_data?.year_exp}
              </li>
              {driver?.driver_data?.vehicle_id ===
                vehicleDetails?.vehicle_id && (
                <>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Plate No </strong>
                    </span>
                    <Link to={`/admin/vehicles/${vehicleDetails?.vehicle_id}`}>
                      {vehicleDetails?.car_number_plate}
                    </Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Model</strong>
                    </span>
                    {vehicleDetails?.car_make}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Year</strong>
                    </span>
                    {vehicleDetails?.car_model}
                  </li>
                  {/*<li className="list-group-item text-right"><span*/}
                  {/*    className="pull-left"><strong>Vehicle Description</strong></span>{vehicleDetails?.car_desc}*/}
                  {/*</li>*/}
                </>
              )}
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Status</strong>
                </span>
                <Badge
                  color={getStatusColor(driver?.driver_data?.driver_status)}
                >
                  {getStatus(driver.driver_data?.driver_status)}
                </Badge>
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>App Status</strong>
                </span>
                <Badge
                  color={driver?.driver_data?.online ? "success" : "danger"}
                >
                  {driver?.driver_data?.online ? "Online" : "Offline"}
                </Badge>
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Driver's Location on Map</strong>
                </span>
                <button
                  type="button"
                  className="rct-link-btn text-primary"
                  title="view details"
                >
                  <Link to={`/admin/map`}>
                    <i className="ti-eye" />
                  </Link>
                </button>
              </li>
              <li className="list-group-item">
                <span className="pull-left d-flex">
                  {/* {driver?.driver_data?.driver_status === 0 &&
                                        <div className='text-center'>
                                            <Button disabled={loadingStatus} onClick={() => onAccept()} className="bg-primary mt-3 text-white">Accept Driver</Button>
                                        </div>} */}

                  {driver?.driver_data?.driver_status === 1 && //this makes sure u can no longer see verify button after u pass the verification pphase
                    driver?.driver_data?.license_id?.status && // the remaining conditions ensures you cannot verify till all the individual ids are verified
                    driver?.driver_data?.lasdri_id?.status &&
                    driver?.driver_data?.lassra_id?.status &&
                    driver?.driver_data?.nin_id?.status && (
                      <div className="text-center">
                        <Button
                          disabled={loadingStatus}
                          onClick={() => onVerified()}
                          className="bg-success mt-3 text-white"
                        >
                          Verify Driver
                        </Button>
                      </div>
                    )}
                  {driver?.driver_data?.driver_status === 2 &&
                    driver?.driver_data?.asset_payment?.status && (
                      <div className="text-center">
                        <Button
                          disabled={loadingStatus}
                          onClick={() => onTrained()}
                          className="bg-success mt-3 text-white"
                        >
                          Mark as Trained
                        </Button>
                      </div>
                    )}
                  {/* {driver?.driver_data?.driver_status === 3 &&
                                        <div className='text-center d-flex'>
                                            {/* <Button disabled={loadingStatus} onClick={() => onTrained()} className="bg-warning mt-3 text-white mr-2">Confirm Driver Training</Button> */}
                  {/* <Button disabled={loadingStatus} onClick={() => onApproved()} className="bg-danger mt-3 text-white ">Approve Driver</Button> */}
                  {/* </div>}  */}
                  {driver?.driver_data?.driver_status === 4 && (
                    <div className="text-center">
                      <Button
                        disabled={loadingStatus}
                        onClick={() => setSuspensionReasonsModalOpen(true)}
                        className="bg-danger mt-3 text-white"
                      >
                        Suspend Driver
                      </Button>
                    </div>
                  )}
                  {driver?.driver_data?.driver_status === 5 && (
                    <div className="text-center">
                      <Button
                        disabled={loadingStatus}
                        onClick={() => onReactivate()}
                        className="bg-success mt-3 text-white"
                      >
                        Reactivate Driver
                      </Button>
                    </div>
                  )}
                  {driver?.driver_data?.driver_status === 3 &&
                    !driver.driver_data?.vehicle_id &&
                    driver?.driver_data?.asset_payment.status &&
                    driver?.driver_data?.verification_payment.status && (
                      <div className="text-center ml-2">
                        <Button
                          disabled={loadingStatus}
                          onClick={() => {
                            opnAddVehicleModal();
                          }}
                          className="bg-warning mt-3 text-white"
                        >
                          Assign Vehicle
                        </Button>
                      </div>
                    )}
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
      <Modal
        size="lg"
        isOpen={isViewerOpen}
        toggle={() => setIsViewerOpen(!isViewerOpen)}
      >
        <ModalHeader toggle={() => setIsViewerOpen(!isViewerOpen)}>
          Receipt Preview
        </ModalHeader>
        <img src={driver?.driver_data?.receipt_url} alt="receipt" />
      </Modal>
      {/* modal that changes the driver category  */}
      <Modal
        size="sm"
        isOpen={categoryModalOpen}
        toggle={() => setCategoryModalOpen(!categoryModalOpen)}
      >
        <ModalHeader toggle={() => setCategoryModalOpen(!categoryModalOpen)}>
          Change Driver Category
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleCategorySubmit}>
            <div className="px-3">
              <Input
                type="radio"
                name="driver_category"
                value="social"
                checked={driverCategory === "social"}
                onChange={() => setDriverCategory("social")}
              />
              Social Driver
            </div>
            <div className="px-3">
              <Input
                type="radio"
                name="driver_category"
                value="commercial"
                checked={driverCategory === "commercial"}
                onChange={() => setDriverCategory("commercial")}
              />
              Commercial Driver
            </div>
            <div className="mt-2 text-right">
              <button className=" btn rounded btn-primary">Change</button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
      {/* modal for verifying each of the IDs */}
      <Modal
        size="md"
        isOpen={idVerificationModalOpen}
        toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}
      >
        <ModalHeader
          toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}
        >
          Verify {idVerificationType(idType)}
        </ModalHeader>
        <ModalBody>
          <h1>verifying id ...</h1>
          <div className="mt-2 text-right">
            <button
              className=" btn rounded btn-primary"
              onClick={() => verifyId(idType)}
            >
              Verify {idVerificationType(idType)}
            </button>
          </div>
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
                <Input
                  type="select"
                  name="vehicle"
                  onChange={onChange}
                  value={vehicle}
                  required={true}
                >
                  <option value="">Select Vehicle</option>
                  {vehicles &&
                    vehicles.map((vehicle) => (
                      <option
                        key={vehicle.vehicle_id}
                        value={vehicle.vehicle_id}
                      >
                        {vehicle.car_number_plate}
                      </option>
                    ))}
                </Input>
              </FormGroup>
              <ModalFooter>
                <Button
                  type="submit"
                  variant="contained"
                  className="text-white btn-success"
                >
                  Assign
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </ModalBody>
      </Modal>

      {/* modal to select reason for suspension */}
      <Modal
        isOpen={suspensionReasonsModalOpen}
        toggle={() => setSuspensionReasonsModalOpen(false)}
      >
        <ModalHeader toggle={() => setSuspensionReasonsModalOpen(false)}>
          Select Reasons for Suspension
        </ModalHeader>
        <ModalBody>
          <div className="ml-4">
            <Form onSubmit={onSuspend}>
              {suspensionReasonsList.map((item) => (
                <FormGroup>
                  <Input
                    onChange={handleReasonClick}
                    readOnly={true}
                    type="checkbox"
                    value={item}
                  />
                  {item}
                </FormGroup>
              ))}

              <ModalFooter>
                <Button
                  type="submit"
                  variant="contained"
                  className="text-white btn-danger"
                >
                  Proceed
                </Button>
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
};
function mapDispatchToProps(dispatch) {
  return {
    getCustomerCare: (spinner) => dispatch(getCustomerCare(spinner)),
    changeDriverStatus: (
      auth_id,
      driver_status,
      driverData,
      message_type,
      subject
    ) =>
      dispatch(
        changeDriverStatus(
          auth_id,
          driver_status,
          driverData,
          message_type,
          subject
        )
      ),
    changeDriverCategory: (
      auth_id,
      category,
      driverData,
      message_type,
      subject
    ) =>
      dispatch(
        changeDriverCategory(
          auth_id,
          category,
          driverData,
          message_type,
          subject
        )
      ),
    verifyID: (auth_id, verification_status, verification_name) =>
      dispatch(verifyID(auth_id, verification_status, verification_name)),
    assignVehicle: (
      vehicle_id,
      driver_auth_id,
      driverData,
      vehicleData,
      message_type
    ) =>
      dispatch(
        assignVehicleOnProfile(
          vehicle_id,
          driver_auth_id,
          driverData,
          vehicleData,
          message_type
        )
      ),
    getVehicle: (vehicle_id, spinner) =>
      dispatch(getVehicle(vehicle_id, spinner)),
  };
}
const mapStateToProps = (state) => ({
  loadingStatus: state.loading.loadingStatus,
  vehicles: state.vehicle.vehicles,
  vehicleDetails: state.vehicle.vehicleDetails,
  customerCareNumbers: state.customerCare.customerCareNumbers,
});
export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);
