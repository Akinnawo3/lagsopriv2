import React, { useState, useEffect, useRef } from "react";
import { Badge, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import Button from "@material-ui/core/Button";
import { getStatus, getStatusColor, idVerificationType } from "Helpers/helpers";
import { changeDriverStatus, changeDriverCategory, verifyID, updateMedicalRecord, updateDriver } from "Actions/driverAction";
import { getCustomerCare } from "Actions/customerCareAction";
import { sendVerificationRequest } from "Actions/idVerificationAction";
import { connect } from "react-redux";
import { assignVehicleOnProfile, getVehicle } from "Actions/vehicleAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { Link } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import emailMessages from "Assets/data/email-messages/emailMessages";
import suspensionReasonsList from "../../../assets/data/suspension-reasons/suspensionReasonsList";
import Spinner from "Components/spinner/Spinner";
import { verifyUserPermssion } from "../../../container/DefaultLayout";
import AsyncSelectComponent from "./AsyncSelect";
import { calculatePostDate, clculateDailyLoanRepayment, fullDateTime } from "../../../helpers/helpers";
import { deleteUser } from "../../../actions/userAction";
export let onAddVehicleModalClose;
export let closeMedicalRecordModal;
export let onVerified;
export let closeRepaymentModal;
export let activateDriver;
const DriverProfile = ({
   driver,
   changeDriverStatus,
   updateMedicalRecord,
   changeDriverCategory,
   sendVerificationRequest,
   loadingStatus,
   vehicles,
   assignVehicle,
   vehicleDetails,
   verificationResult,
   getCustomerCare,
   customerCareNumbers,
   verifyID,
   dataMode,
   updateDriver,
   deleteUser,
}) => {
   const [isViewerOpen, setIsViewerOpen] = useState(false);
   const [addVehicleModal, setAddVehicleModal] = useState(false);
   const [idVerificationModalOpen, setIdVerificationModalOpen] = useState(false);
   const [idType, setIdType] = useState("");

   const [driverCategory, setDriverCategory] = useState(driver?.driver_data?.driver_category);
   const [categoryModalOpen, setCategoryModalOpen] = useState(false);
   const [loanEligibilityModalOpen, setLoanEligibilityModalOpen] = useState(false);
   const [repaymentModalOpen, setRepaymentModalOpen] = useState(false);
   const [suspensionReasonsModalOpen, setSuspensionReasonsModalOpen] = useState(false);
   const [vehicleData, setVehicleData] = useState({});
   const [argument, setArgument] = useState(null);
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");
   const [deletedId, setDeletedId] = useState("");
   const [suspensionReasons, setSuspensionReasons] = useState();
   const [medicalRecordsModal, setMedicalRecordsModal] = useState();
   const [tuberculosis, setTuberculosis] = useState(driver?.driver_data?.medical_record?.tuberculosis || "");
   const [hepatitis, setHepatitis] = useState(driver?.driver_data?.medical_record?.hepatitis || "");
   const [loanEligibility, setLoanEligibility] = useState(driver?.driver_data?.loan_data?.is_eligible || "");

   const [oneOff, setOneOff] = useState(driver?.driver_data?.asset_payment?.amount || "");
   const [debtService, setDebtService] = useState(driver?.driver_data?.payment_plan?.plan);
   const [loanRepayment, setLoanRepayment] = useState(driver?.driver_data?.payment_plan?.loan);
   const [partnershipStatusModal, setPartnershipStatusModal] = useState(false);
   const [partnershipStatus, setPartnershipStatus] = useState(driver?.driver_data?.partnership_status);

   const inputEl = useRef(null);
   const [formData, setFormData] = useState({
      firstname: driver?.first_name,
      lastname: driver?.last_name,
      email: driver?.email,
      vehicle: "",
   });
   const onChange = (e) => {
      // checking if the argument "e" is from a form input element or from the asyncSelect component, i checked for e.target.name.. if its not defined then the argument isnt passed from a form input
      e?.target?.name ? setFormData({ ...formData, [e.target.name]: e.target.value }) : setFormData({ ...formData, vehicle: e.value });
   };

   const { vehicle } = formData;

   const isTest = dataMode === "test";

   useEffect(() => {
      getCustomerCare();
      if (vehicle && vehicles.length > 0) {
         const vehicleValue = vehicles.find((element) => element.vehicle_id === vehicle);
         setVehicleData(vehicleValue);
      }
   }, [vehicle]);

   const opnAddVehicleModal = () => {
      setAddVehicleModal(true);
   };

   onAddVehicleModalClose = () => {
      setAddVehicleModal(false);
   };

   activateDriver = () =>
      changeDriverStatus(
         driver?.auth_id,
         "4",
         driver,
         emailMessages.approveMsg({
            firstName: driver?.first_name,
            vehicleDetails: vehicle,
         }),
         "Driver Approved"
      );

   const onSubmit = async (e) => {
      onAddVehicleModalClose();
      e.preventDefault();
      if (formData?.vehicle) {
         await assignVehicle(vehicle?.vehicle_id, driver?.auth_id, driver, vehicleData, "5M");
      } else {
         NotificationManager.error("Select a vehicle");
      }
   };
   const onAccept = () => {
      setTitle("Are you sure you want to accept driver");
      setMessage("This driver will be accepted on the platform.");
      setArgument(1);
      inputEl.current.open();
   };
   onVerified = () => {
      setTitle("Are you sure you want to verify driver");
      setMessage("This driver will be verified on the platform.");
      setArgument(2);
      inputEl.current.open();
   };
   const onTrained = () => {
      setTitle("Are you sure you want to confirm this driver trained");
      setMessage("This driver will be confirmed as trained on the platform.");
      setArgument(3);
      inputEl.current.open();
   };

   const onActivate = () => {
      setTitle("Are you sure you want to activate this driver");
      setMessage("This driver's account will be activated.");
      setArgument(4);
      inputEl.current.open();
   };

   const onSuspend = (e) => {
      e.preventDefault();
      if (!suspensionReasons) {
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

   const onDelete = (id) => {
      setTitle("Are you sure you want to delete driver");
      setMessage("This driver will be deleted onDele.");
      setArgument(10);
      setDeletedId(id);
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
   const handleLoanEligibilityChange = (e) => {
      e.preventDefault();
      setLoanEligibilityModalOpen(false);
      setTitle("Are you sure you want to update driver's loan eligibility?");
      setMessage("The driver's loan eligibility will be updated");
      setArgument(8);
      inputEl.current.open();
   };

   const handlePartnershipStatusChange = (e) => {
      e.preventDefault();
      setPartnershipStatusModal(false);
      setTitle("Are you sure you want to update driver's partnership status?");
      setMessage("The driver's partnership status will be updated");
      setArgument(9);
      inputEl.current.open();
   };

   const triggerIdVerifcation = (data) => {
      setIdType(data?.id_type);
      !isTest && sendVerificationRequest(data);
      setIdVerificationModalOpen(true);
   };
   const verifyId = (type) => {
      setIdVerificationModalOpen(false);
      setTitle(`Are you sure you want to verify this Driver's ${idVerificationType(idType)}`);
      setMessage(`The driver's ${idVerificationType(idType)} will be verified`);
      setArgument(7);
      inputEl.current.open();
   };
   const handleReasonClick = (e) => {
      setSuspensionReasons(e.target.value);
      //  if (e.target.checked) {
      //    setSuspensionReasons([...suspensionReasons, e.target.value]);
      //  } else {
      //    const removeReason = suspensionReasons.filter((item) => item === e.target.value);
      //    setSuspensionReasons(removeReason);
      //  }
   };

   const medicalRecordUpdate = (e) => {
      e.preventDefault();
      updateMedicalRecord(driver?.auth_id, { tuberculosis, hepatitis });
   };

   closeMedicalRecordModal = () => {
      setMedicalRecordsModal(false);
   };
   closeRepaymentModal = () => {
      setRepaymentModalOpen(false);
   };

   const onConfirm = () => {
      if (argument === 1) {
         changeDriverStatus(driver?.auth_id, "1", driver, emailMessages.acceptMsg, "Driver Reactivated");
      }
      if (argument === 2) {
         changeDriverStatus(driver?.auth_id, "2", driver, emailMessages.verifiedMessage, "Driver Verified");
      }
      if (argument === 3) {
         changeDriverStatus(driver?.auth_id, "3", driver, emailMessages.trainedMessage, "Driver Traning Confirmed");
      }
      if (argument === 4) {
         changeDriverStatus(driver?.auth_id, "4", driver, emailMessages.approveMsg, "Driver Activated");
      }
      if (argument === 5) {
         changeDriverStatus(driver?.auth_id, "5", driver, suspensionReasons, "Driver Suspended");
      }
      if (argument === 6) {
         changeDriverCategory(driver?.auth_id, driverCategory, driver, "Category Changed");
      }
      if (argument === 7) {
         if (idType === "driver_license") {
            verifyID(driver?.auth_id, "1", "drivers_license");
         } else {
            verifyID(driver?.auth_id, "1", idType);
         }
      }
      if (argument === 8) {
         updateDriver({
            component: "debt_service",
            loan_request: loanEligibility.toString(),
            auth_id: driver?.auth_id,
         });
      }
      if (argument === 9) {
         updateDriver({
            component: "debt_service",
            partnership_status: partnershipStatus.toString(),
            auth_id: driver?.auth_id,
         });
      }
      if (argument === 10) {
         deleteUser(deletedId, null, "driver");
      }
      inputEl.current.close();
   };

   const handleRepaymentsUpdate = (e) => {
      e.preventDefault();
      updateDriver({
         component: "debt_service",
         one_off_amount: oneOff,
         loan_service_fee: loanRepayment,
         debt_service_fee: debtService,
         auth_id: driver?.auth_id,
      });
   };
   console.log(driver);
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
                           <strong>Work Phone Number</strong>
                        </span>
                        {driver?.work_phone_number}
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
                     {driver?.driver_data?.driver_status >= 2 && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Tuberculosis Status</strong>
                              </span>
                              <span className="text-capitalize"> {driver?.driver_data?.medical_record?.tuberculosis}</span>
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Hepatitis Status</strong>
                              </span>
                              <span className="text-capitalize"> {driver?.driver_data?.medical_record?.hepatitis}</span>
                           </li>
                        </>
                     )}

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
                        {driver?.bank_data ? driver?.bank_data?.bank_name : "NA"}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Bank Account Number</strong>
                        </span>
                        {driver?.bank_data ? driver?.bank_data?.account_number : "NA"}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Date of Approval</strong>
                        </span>
                        {fullDateTime(driver?.driver_data?.approved_date).fullDateTime}
                     </li>
                     {driver?.bvn && (
                        <li className="list-group-item text-right">
                           <span className="pull-left">
                              <strong>BVN</strong>
                           </span>
                           {driver?.bvn?.value}
                        </li>
                     )}
                     {driver?.polaris_data && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Polaris Account Name</strong>
                              </span>
                              {driver?.polaris_data_account_name}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Polaris Account Number</strong>
                              </span>
                              {driver?.polaris_data_account_number}
                           </li>
                        </>
                     )}
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-sm-10 col-lg-5 offset-lg-1">
            <div className="tab-content">
               <div className="tab-pane active" id="home">
                  <ul className="list-group">
                     {/* {driver?.bvn && ( */}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Rest Day</strong>
                        </span>
                        <span className="text-capitalize"> {!driver?.driver_data?.rest_day || driver?.driver_data?.rest_day?.day === "" ? "Sunday" : driver?.driver_data?.rest_day?.day}</span>
                     </li>
                     {/* )} */}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Driver Category</strong>
                        </span>
                        {driver?.driver_data?.driver_category === "commercial" ? "Self Sponsored" : "Loan"}

                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setCategoryModalOpen(true)}>
                           Change
                        </span>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Partnership Status</strong>
                        </span>
                        {driver?.driver_data?.partnership_status === undefined || driver?.driver_data?.partnership_status === 0
                           ? "Not Interested"
                           : driver?.driver_data?.partnership_status === 1
                              ? "Interested"
                              : driver?.driver_data?.partnership_status === 2
                                 ? "In partnership"
                                 : "N/A"}

                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setPartnershipStatusModal(true)}>
                           Change
                        </span>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Loan Eligibility</strong>
                        </span>
                        {driver?.driver_data?.loan_data?.is_eligible == 1 && "Eligible"}
                        {driver?.driver_data?.loan_data?.is_eligible == 0 && "Undecided"}
                        {driver?.driver_data?.loan_data?.is_eligible == 2 && "Not Eligible"}

                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setLoanEligibilityModalOpen(true)}>
                           Change
                        </span>
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
                           <strong>One-off Payment</strong>
                        </span>
                        {driver?.driver_data?.asset_payment?.status ? "Paid" : "Not Paid"}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>One-off Payment Amount</strong>
                        </span>

                        {oneOff
                           ? ` ??? ${oneOff.toLocaleString()}`
                           : driver?.driver_data?.driver_category === "social"
                              ? ` ??? ${customerCareNumbers?.soc_driver_fee?.total?.toLocaleString()}`
                              : ` ??? ${customerCareNumbers?.com_driver_fee?.total?.toLocaleString()}`}
                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setRepaymentModalOpen(true)}>
                           Change
                        </span>
                     </li>

                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Daily debt service Amt</strong>
                        </span>
                        {driver?.driver_data?.payment_plan?.plan ? "???" + driver?.driver_data?.payment_plan?.plan : "NA"}

                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setRepaymentModalOpen(true)}>
                           Change
                        </span>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Loan Repayment Amt</strong>
                        </span>
                        {driver?.driver_data?.payment_plan?.loan ? "???" + driver?.driver_data?.payment_plan?.loan : "NA"}

                        {/* {driver?.driver_data?.payment_plan?.plan ? "???" + driver?.driver_data?.payment_plan?.plan : "NA"} */}

                        <span className="bg-primary rounded fw-bold p-2 ml-3 text-white" onClick={() => setRepaymentModalOpen(true)}>
                           Change
                        </span>
                     </li>
                     {driver?.driver_data?.is_proxy &&
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Proxy Driver</strong>
                              </span>
                              <span className={`fw-bold ${driver?.driver_data?.is_proxy ? "text-success" : "text-danger"}`}>
                                 {driver?.driver_data?.is_proxy ? "Yes" : "No"}
                              </span>
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>View Proxy Host </strong>
                              </span>
                              <Link to={`/admin/drivers/${driver?.driver_data?.proxy_host}`}>
                                 <i className="ti-eye" />
                              </Link>
                           </li>
                        </>
                     }
                     {driver?.driver_data?.driver_status === 4 && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Partnered Driver</strong>
                              </span>
                              <span className={`fw-bold ${driver?.driver_data?.partnership_status === 0 || driver?.driver_data?.partnership_status === 1 ? "text-danger" : "text-success"}`}>
                                 {driver?.driver_data?.partnership_status === 0 || driver?.driver_data?.partnership_status === 1 ? "No" : "Yes"}
                              </span>
                           </li>
                           {/* status 2 if there is a partner */}
                           {driver?.driver_data?.partnership_status === 2 && (
                              <>
                                 <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>View Partner Details </strong>
                                    </span>
                                    <Link to={`/admin/partners/${driver?.driver_data?.partner_id}`}>
                                       <i className="ti-eye" />
                                    </Link>
                                 </li>
                                 <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>Partnership Date </strong>
                                    </span>
                                    {calculatePostDate(driver?.driver_data?.approved_date)}
                                 </li>
                              </>
                           )}

                        </>
                     )}

                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Driving License</strong>
                        </span>
                        {driver?.driver_data?.license_id?.value}

                        {driver?.driver_data?.license_id?.status ? (
                           <i className="ti-check ml-3" />
                        ) : (
                           <Button
                              // className={`btn-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`}
                              className={`btn-warning rounded fw-bold p-2 ml-3`}
                              onClick={() =>
                                 driver?.driver_data?.license_id?.value
                                    ? triggerIdVerifcation({ id_type: "driver_license", id_value: driver?.driver_data?.license_id?.value, first_name: driver?.first_name, last_name: driver?.last_name })
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
                        {driver?.driver_data?.lasdri_id?.value === driver?.phone_number ? "" : driver?.driver_data?.lasdri_id?.value}
                        {driver?.driver_data?.lasdri_id?.status ? (
                           <i className="ti-check ml-3" />
                        ) : (
                           <Button
                              // className={`btn-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`}
                              className={`btn-warning rounded fw-bold p-2 ml-3`}
                              onClick={() =>
                                 driver?.driver_data?.lasdri_id?.value
                                    ? triggerIdVerifcation({ id_type: "lasdri", id_value: driver?.driver_data?.lasdri_id?.value, first_name: driver?.first_name, last_name: driver?.last_name })
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
                        {driver?.driver_data?.lassra_id?.value === driver?.phone_number ? "" : driver?.driver_data?.lassra_id?.value}
                        {driver?.driver_data?.lassra_id?.status ? (
                           <i className="ti-check ml-3" />
                        ) : (
                           <Button
                              // className={`btn-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`}
                              className={`btn-warning rounded fw-bold p-2 ml-3`}
                              onClick={() =>
                                 driver?.driver_data?.license_id?.value
                                    ? triggerIdVerifcation({
                                       id_type: "lassra",
                                       type: "data",
                                       lassra_id: driver?.driver_data?.lassra_id?.value,
                                       first_name: driver?.first_name,
                                       middle_name: driver?.first_name,
                                       last_name: driver?.last_name,
                                       dob: driver?.dob,
                                    })
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
                              // className={`btn-warning rounded fw-bold p-2 ml-3 ${driver?.driver_data?.driver_status > 1 && "d-none"}`}
                              className={`btn-warning rounded fw-bold p-2 ml-3`}
                              onClick={() =>
                                 driver?.driver_data?.nin_id?.value
                                    ? triggerIdVerifcation({ id_type: "nin", id_value: driver?.driver_data?.nin_id?.value, first_name: driver?.first_name, last_name: driver?.last_name })
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
                        {driver?.driver_data?.verification_payment?.status ? "Paid" : "Not Paid"}
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
                           <strong> Years of Experience</strong>
                        </span>
                        {driver?.driver_data?.year_exp}
                     </li>
                     {driver?.vehicle_data?._id && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Plate No </strong>
                              </span>
                              <Link to={{ pathname: `/admin/vehicles/${driver?.vehicle_data?._id}`, state: { driver_id: driver?.auth_id || "", partner_id: driver?.driver_data?.partner_id || "" } }}>
                                 {driver?.vehicle_data?.car_number_plate}
                              </Link>
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Number</strong>
                              </span>
                              {driver?.vehicle_data?.car_number}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Year</strong>
                              </span>
                              {driver?.vehicle_data?.car_model}
                           </li>
                        </>
                     )}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Status</strong>
                        </span>
                        <Badge color={getStatusColor(driver?.driver_data?.driver_status)}>{getStatus(driver.driver_data?.driver_status)}</Badge>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>App Status</strong>
                        </span>
                        <Badge color={driver?.driver_data?.online ? "success" : "danger"}>{driver?.driver_data?.online ? "Online" : "Offline"}</Badge>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Driver's Location on Map</strong>
                        </span>
                        <button type="button" className="rct-link-btn text-primary" title="view details">
                           <Link to={`/admin/map`}>
                              <i className="ti-eye" />
                           </Link>
                        </button>
                     </li>
                     <li className="list-group-item">
                        <span className="pull-left d-flex">
                           {driver?.driver_data?.driver_status === 0 && (
                              //  driver?.driver_data?.asset_payment?.status &&
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => onAccept())} className="bg-success mt-3 text-white">
                                    Accept Driver
                                 </Button>
                              </div>
                           )}

                           {driver?.driver_data?.driver_status === 1 && ( //this makes sure u can no longer see verify button after u pass the verification pphase
                              //  driver?.driver_data?.license_id?.status && // the remaining conditions ensures you cannot verify till all the individual ids are verified
                              // driver?.driver_data?.lasdri_id?.status &&
                              // driver?.driver_data?.lassra_id?.status &&
                              // driver?.driver_data?.nin_id?.status &&
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => setMedicalRecordsModal(true))} className="bg-success mt-3 text-white">
                                    Verify Driver
                                 </Button>
                              </div>
                           )}
                           {driver?.driver_data?.driver_status === 2 && (
                              //  driver?.driver_data?.asset_payment?.status &&
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => onTrained())} className="bg-success mt-3 text-white">
                                    Mark as Trained
                                 </Button>
                              </div>
                           )}
                           {driver?.driver_data?.driver_status === 3 && driver?.vehicle_data?._id && (
                              //  driver?.driver_data?.asset_payment?.status &&
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => onActivate())} className="bg-success mt-3 text-white">
                                    Activate Driver
                                 </Button>
                              </div>
                           )}
                           <div className="text-center mx-2">
                              <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => onDelete(driver?.auth_id))} className="bg-danger mt-3 text-white">
                                 Delete Driver
                              </Button>
                           </div>

                           {driver?.driver_data?.driver_status === 4 && (
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => setSuspensionReasonsModalOpen(true))} className="bg-danger mt-3 text-white">
                                    Suspend Driver
                                 </Button>
                              </div>
                           )}
                           {driver?.driver_data?.driver_status === 5 && (
                              <div className="text-center">
                                 <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("update_driver_status", () => onReactivate())} className="bg-success mt-3 text-white">
                                    Reactivate Driver
                                 </Button>
                              </div>
                           )}
                           {driver?.driver_data?.driver_status >= 2 &&
                              !driver.driver_data?.vehicle_id &&
                              //  driver?.driver_data?.asset_payment.status &&
                              driver?.driver_data?.verification_payment.status && (
                                 <div className="text-center ml-2">
                                    <Button disabled={loadingStatus} onClick={() => verifyUserPermssion("assign_vehicle_to_driver", () => opnAddVehicleModal())} className="bg-warning mt-3 text-white">
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
         <Modal size="lg" isOpen={isViewerOpen} toggle={() => setIsViewerOpen(!isViewerOpen)}>
            <ModalHeader toggle={() => setIsViewerOpen(!isViewerOpen)}>Receipt Preview</ModalHeader>
            <img src={driver?.driver_data?.receipt_url} alt="receipt" />
         </Modal>
         {/* modal that changes the driver category  */}
         <Modal size="sm" isOpen={categoryModalOpen} toggle={() => setCategoryModalOpen(!categoryModalOpen)}>
            <ModalHeader toggle={() => setCategoryModalOpen(!categoryModalOpen)}>Change Driver Category</ModalHeader>
            <ModalBody>
               <Form onSubmit={handleCategorySubmit}>
                  <div className="px-3">
                     <Input type="radio" name="driver_category" value="social" defaultChecked={driver?.driver_data?.driver_category === "social"} onChange={() => setDriverCategory("social")} />
                     Loan Driver
                  </div>
                  <div className="px-3">
                     <Input type="radio" name="driver_category" value="commercial" defaultChecked={driver?.driver_data?.driver_category === "commercial"} onChange={() => setDriverCategory("commercial")} />
                     Self Sponsored Driver
                  </div>
                  <div className="mt-2 text-right">
                     <button className=" btn rounded btn-primary cursor-pointer">Change</button>
                  </div>
               </Form>
            </ModalBody>
         </Modal>
         {/* modal that changes partnership status*/}
         <Modal size="sm" isOpen={partnershipStatusModal} toggle={() => setPartnershipStatusModal(!partnershipStatusModal)}>
            <ModalHeader toggle={() => setPartnershipStatusModal(!partnershipStatusModal)}>Update Partnership Status</ModalHeader>
            <ModalBody>
               <Form onSubmit={handlePartnershipStatusChange}>
                  <div className="px-3">
                     <Input type="radio" id="interested" name="partnership_status" defaultChecked={driver?.driver_data?.partnership_status == "1"} onChange={() => setPartnershipStatus(1)} />
                     <Label for="interested">Interested</Label>
                  </div>
                  <div className="px-3">
                     <Input type="radio" id="not_interested" name="partnership_status" defaultChecked={driver?.driver_data?.partnership_status == "0"} onChange={() => setPartnershipStatus(2)} />
                     <Label for="not_interested"> Not Interested</Label>
                  </div>
                  <div className="mt-2 text-right">
                     <button className=" btn rounded btn-primary cursor-pointer">Change</button>
                  </div>
               </Form>
            </ModalBody>
         </Modal>
         {/* modal that changes loan Eligibility  */}
         <Modal size="sm" isOpen={loanEligibilityModalOpen} toggle={() => setLoanEligibilityModalOpen(!loanEligibilityModalOpen)}>
            <ModalHeader toggle={() => setLoanEligibilityModalOpen(!loanEligibilityModalOpen)}>Update Loan Eligibility</ModalHeader>
            <ModalBody>
               <Form onSubmit={handleLoanEligibilityChange}>
                  <div className="px-3">
                     <Input type="radio" id="Eligible" name="loan_eligibility" defaultChecked={driver?.driver_data?.loan_data?.is_eligible == "1"} onChange={() => setLoanEligibility(1)} />
                     <Label for="Eligible">Eligible</Label>
                  </div>
                  <div className="px-3">
                     <Input type="radio" id="not_eligible" name="loan_eligibility" defaultChecked={driver?.driver_data?.loan_data?.is_eligible == "0"} onChange={() => setLoanEligibility(2)} />
                     <Label for="not_eligible"> Not Eligible</Label>
                  </div>
                  <div className="mt-2 text-right">
                     <button className=" btn rounded btn-primary cursor-pointer">Change</button>
                  </div>
               </Form>
            </ModalBody>
         </Modal>

         {/* modal that changes the driver repayment stuffs */}
         <Modal size="md" isOpen={repaymentModalOpen} toggle={() => setRepaymentModalOpen(!repaymentModalOpen)}>
            <ModalHeader toggle={() => setRepaymentModalOpen(!repaymentModalOpen)}>Repayment Amounts</ModalHeader>
            <ModalBody>
               <Form onSubmit={handleRepaymentsUpdate}>
                  <div>
                     <Label>One-off Payment</Label>
                     <Input
                        required
                        type="number"
                        //  min={140000}
                        //  max={700000}
                        name="one_off"
                        value={oneOff}
                        onChange={(e) => {
                           setOneOff(e.target.value);
                           setLoanRepayment(clculateDailyLoanRepayment(e.target.value));
                        }}
                     />
                  </div>
                  <div>
                     <Label>Debt Service Amount</Label>
                     <Input required type="text" name="debt_service" value={debtService} onChange={(e) => setDebtService(e.target.value)} />
                  </div>
                  <div className="mt-3">
                     <Label>Loan Repayment Amount</Label>
                     <Input required type="number" name="loan_repayment" value={loanRepayment} onChange={(e) => setLoanRepayment(e.target.value)} />
                  </div>
                  <div className="mt-2 text-right">
                     <button className=" btn rounded btn-primary cursor-pointer">Change</button>
                  </div>
               </Form>
            </ModalBody>
         </Modal>

         {/* Medical Records Modal */}
         <Modal size="sm" isOpen={medicalRecordsModal} toggle={() => setMedicalRecordsModal(false)}>
            <ModalHeader toggle={() => setMedicalRecordsModal(false)}>Medical Records</ModalHeader>
            <ModalBody>
               <Form onSubmit={medicalRecordUpdate}>
                  <FormGroup>
                     <Label for="tb">Tuberculosis Status </Label>
                     <Input type="select" name="tuberculosis" value={tuberculosis} onChange={(e) => setTuberculosis(e.target.value)} required>
                        <option value="" selected hidden>
                           -- select Tuberculosis status --
                        </option>
                        <option value="positive">Positive</option>
                        <option value="negative">Negative</option>
                     </Input>
                  </FormGroup>
                  <FormGroup>
                     <Label for="hbsag">Hepatitis B Status </Label>
                     <Input type="select" name="hbsag" value={hepatitis} onChange={(e) => setHepatitis(e.target.value)} required>
                        <option value="" selected hidden>
                           -- select Hepatitis B status --
                        </option>
                        <option value="positive">Positive</option>
                        <option value="negative">Negative</option>
                     </Input>
                  </FormGroup>
                  <div className="mt-2 text-right">
                     <button className=" btn rounded btn-primary">Submit</button>
                  </div>
               </Form>
            </ModalBody>
         </Modal>
         {/* modal for verifying each of the IDs */}
         <Modal size="md" isOpen={idVerificationModalOpen} toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}>
            <ModalHeader toggle={() => setIdVerificationModalOpen(!idVerificationModalOpen)}>Verify {idVerificationType(idType)}</ModalHeader>
            <ModalBody style={{ minHeight: 100 }}>
               {loadingStatus && (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                     <Spinner />
                     <h3 className="fw-bold mt-3">verifying id </h3>
                  </div>
               )}
               {!loadingStatus && (
                  <div>
                     {isTest && (
                        <div>
                           <div className="d-flex flex-column justify-content-center align-items-center">
                              <div className="fw-bold text-danger">This is test enironment so there is no verification API call </div>
                           </div>
                           <div className="mt-2 text-right">
                              <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                                 Verify {idVerificationType(idType)}
                              </button>
                           </div>
                        </div>
                     )}
                     {verificationResult?.status === "error" && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                           <div className="fw-bold text-danger">{verificationResult?.msg} </div>
                        </div>
                     )}
                     {verificationResult?.status === "error" && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                           <div className="fw-bold text-danger">{verificationResult?.message} </div>
                        </div>
                     )}
                     {verificationResult?.status === "success" && (
                        <div>
                           <ul className="list-group">
                              <div className="rounded rounded-circle">
                                 <img src={`data:image/png;base64, ${verificationResult?.data?.photo}`} alt="Red dot" />
                                 {/* <img alt="" src={verificationResult?.data?.photo} /> */}
                              </div>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Name</strong>
                                 </span>
                                 {`${verificationResult?.data?.firstname} ${verificationResult?.data?.middlename} ${verificationResult?.data?.lastname}`}
                              </li>

                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>First Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.data?.firstname?.toUpperCase() === driver?.first_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Last Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.data?.lastname?.toUpperCase() === driver?.last_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Phone Number Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.data?.phone === driver?.phone_number ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Birth Date</strong>
                                 </span>
                                 {`${verificationResult?.data?.birthdate} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Gender</strong>
                                 </span>
                                 {`${verificationResult?.data?.gender} `}
                              </li>
                              {idType === "driver_licence" && (
                                 <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>Expiry Date</strong>
                                    </span>
                                    {`${verificationResult?.data?.expiryDate}`}
                                 </li>
                              )}
                              <div className="mt-2 text-right">
                                 <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                                    Verify {idVerificationType(idType)}
                                 </button>
                              </div>
                           </ul>
                        </div>
                     )}
                     {/* status "1" is for lasdri when valid status
              status "0" is for lasdri when valid but expired */}
                     {(verificationResult?.status === "1" || verificationResult?.status === "0") && (
                        <div>
                           <ul className="list-group">
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Message</strong>
                                 </span>
                                 {`${verificationResult?.message}`}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Name</strong>
                                 </span>
                                 {`${verificationResult?.f_name} ${verificationResult?.m_name} ${verificationResult?.surname}`}
                              </li>

                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>First Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.f_name?.toUpperCase() === driver?.first_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Last Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.surname?.toUpperCase() === driver?.last_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Phone Number Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.phone_no === driver?.phone_number ? "Yes" : "No"} `}
                              </li>

                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>DATE OF BIRTH</strong>
                                 </span>
                                 {`${verificationResult?.dob} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>PHONE NUMBER</strong>
                                 </span>
                                 {`${verificationResult?.phone_no} `}
                              </li>
                           </ul>
                           <div className="mt-2 text-right">
                              <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                                 Verify {idVerificationType(idType)}
                              </button>
                           </div>
                        </div>
                     )}
                     {/* status "00" is for lassra when valid */}
                     {verificationResult?.code === "00" && (
                        <div>
                           <ul className="list-group">
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Message</strong>
                                 </span>
                                 {`${verificationResult?.message}`}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>NAME</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.firstName} ${verificationResult?.biographicData[0]?.middleName} ${verificationResult?.biographicData[0]?.surname}`}
                              </li>

                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>First Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.firstName?.toUpperCase() === driver?.first_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Last Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.surname?.toUpperCase() === driver?.last_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Phone Number Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.phoneNumber === "+234" + driver?.phone_number.substring(1) ? "Yes" : "No"} `}
                              </li>

                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>GENDER</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.gender} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>DATE OF BIRTH</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.dob} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>PHONE NUMBER</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.phoneNumber} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>EMAIL</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.email} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>ADDRESS</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.houseNo} ${verificationResult?.biographicData[0]?.streetName} ${verificationResult?.biographicData[0]?.town} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>L.G.A</strong>
                                 </span>
                                 {`${verificationResult?.biographicData[0]?.lga} `}
                              </li>
                           </ul>
                           <div className="mt-2 text-right">
                              <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                                 Verify {idVerificationType(idType)}
                              </button>
                           </div>
                        </div>
                     )}
                     {/* to handle internal server error */}
                     {Object.keys(verificationResult).length !== 0 && verificationResult?.code === undefined && (
                        <div>
                           <ul className="list-group">
                              <li className="list-group-item text-center">
                                 <div className="text-danger fw-bold">{`${verificationResult}`}</div>
                              </li>
                           </ul>
                        </div>
                     )}
                  </div>
               )}
            </ModalBody>
         </Modal>
         <Modal isOpen={addVehicleModal} toggle={() => onAddVehicleModalClose()}>
            <ModalHeader toggle={() => onAddVehicleModalClose()}>Assign Vehicle</ModalHeader>
            <ModalBody>
               <div>
                  {/* <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={() => null} />; */}
                  <Form onSubmit={onSubmit}>
                     <FormGroup>
                        <Label for="userName">First Name</Label>
                        <Input onChange={onChange} readOnly={true} type="text" name="firstname" value={driver?.first_name} />
                     </FormGroup>
                     <FormGroup>
                        <Label for="userName">Last Name</Label>
                        <Input onChange={onChange} readOnly={true} type="text" name="lastname" value={driver?.last_name} />
                     </FormGroup>
                     <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input onChange={onChange} type="email" name="email" readOnly={true} value={driver?.email} />
                     </FormGroup>
                     <AsyncSelectComponent onChange={onChange} />
                     {/* <AsyncSelect cacheOptions defaultOptions loadOptions={() => [{label: "one", value: 1},{label: "two", value: 2}]} onChange={() => null} />; */}
                     <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">
                           Assign
                        </Button>
                     </ModalFooter>
                  </Form>
               </div>
            </ModalBody>
         </Modal>

         {/* modal to select reason for suspension */}
         <Modal isOpen={suspensionReasonsModalOpen} toggle={() => setSuspensionReasonsModalOpen(false)}>
            <ModalHeader toggle={() => setSuspensionReasonsModalOpen(false)}>Suspension Mail.</ModalHeader>
            <ModalBody>
               <div className="">
                  <Form onSubmit={onSuspend}>
                     {/* {suspensionReasonsList.map((item) => (
                <FormGroup>
                  <Input onChange={handleReasonClick} readOnly={true} type="checkbox" value={item} />
                  {item}
                </FormGroup>
              ))} */}
                     <Input onChange={handleReasonClick} type="textarea" value={suspensionReasons} />
                     <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-danger">
                           Proceed
                        </Button>
                     </ModalFooter>
                  </Form>
               </div>
            </ModalBody>
         </Modal>

         <DeleteConfirmationDialog ref={inputEl} title={title} message={message} onConfirm={onConfirm} />
      </div>
   );
};
function mapDispatchToProps(dispatch) {
   return {
      getCustomerCare: (spinner) => dispatch(getCustomerCare(spinner)),
      changeDriverStatus: (auth_id, driver_status, driverData, message_type, subject) => dispatch(changeDriverStatus(auth_id, driver_status, driverData, message_type, subject)),
      updateMedicalRecord: (auth_id, medical_record) => dispatch(updateMedicalRecord(auth_id, medical_record)),
      changeDriverCategory: (auth_id, category, driverData, message_type, subject) => dispatch(changeDriverCategory(auth_id, category, driverData, message_type, subject)),
      verifyID: (auth_id, verification_status, verification_name) => dispatch(verifyID(auth_id, verification_status, verification_name)),
      assignVehicle: (vehicle_id, driver_auth_id, driverData, vehicleData, message_type) => dispatch(assignVehicleOnProfile(vehicle_id, driver_auth_id, driverData, vehicleData, message_type)),
      getVehicle: (vehicle_id, spinner) => dispatch(getVehicle(vehicle_id, spinner)),
      sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
      updateDriver: (data) => dispatch(updateDriver(data)),
      deleteUser: (auth_id, users, userType) => dispatch(deleteUser(auth_id, users, userType)),
   };
}
const mapStateToProps = (state) => ({
   loadingStatus: state.loading.loadingStatus,
   vehicles: state.vehicle.vehicles,
   vehicleDetails: state.vehicle.vehicleDetails,
   customerCareNumbers: state.customerCare.customerCareNumbers,
   verificationResult: state.idVerification.verificationResult,
   dataMode: state.authUser.userProfile.data_mode,
});
export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);
