import React, { Fragment, useEffect, useRef, useState } from "react";
import { Badge, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { calculatePostDate, idVerificationType } from "Helpers/helpers";
import AsyncSelectComponent from "Routes/drivers/components/AsyncSelect";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { NotificationManager } from "react-notifications";
import Table from "@material-ui/core/Table";
import { assignVehicleToPartner, changePartnerStatus, revokePartnerVehicle, updatePartnerDriverPayment, verifyPartnerNIN } from "Actions/partnersAction";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/userAction";

import { Link } from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { sendVerificationRequest } from "Actions/idVerificationAction";
import Spinner from "Components/spinner/Spinner";
// import {confirmationDialogue} from "../../../helpers/confirmationDialogue";

const PartnerProfile = ({
   partnerDetails,
   assignVehicleToPartner,
   id,
   changePartnerStatus,
   revokePartnerVehicle,
   driversCount,
   dataMode,
   sendVerificationRequest,
   verificationResult,
   loadingStatus,
   verifyPartnerNIN,
   updatePartnerDriverPayment,
   deleteUser,
}) => {
   const inputEl = useRef(null);
   const inputEl2 = useRef(null);
   const inputEl4 = useRef(null);
   const deleteRef = useRef(null);

   const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      vehicle: "",
   });

   const { firstname, lastname, email } = formData;
   const [addVehicleModal, setAddVehicleModal] = useState(false);
   const [vIModal, setViModal] = useState(false);
   const [CACModal, setCACModal] = useState(false);
   const [vehiclesModal, setVehiclesModal] = useState(false);
   const [idType, setIdType] = useState("");
   const [deletedId, setDeleteId] = useState("");
   const [idVerificationModalOpen, setIdVerificationModalOpen] = useState(false);
   const isTest = dataMode === "test";
   const filteredVehicles = partnerDetails?.partner_data?.vehicle_interested?.filter((x) => x.status === 1);

   const onChange = (e) => {
      // checking if the argument "e" is from a form input element or from the asyncSelect component, i checked for e.target.name.. if its not defined then the argument isnt passed from a form input
      e?.target?.name ? setFormData({ ...formData, [e.target.name]: e.target.value }) : setFormData({ ...formData, vehicle: e.value });
   };

   const triggerIdVerifcation = (type, value, firstName, lastName) => {
      setIdType(type);
      // {id_type: "driver_license", id_value: driver?.driver_data?.license_id?.value, first_name: driver?.first_name, last_name: driver?.last_name}
      !isTest && sendVerificationRequest({ id_type: type, id_value: value, first_name: firstName, last_name: lastName });
      setIdVerificationModalOpen(true);
   };

   const verifyId = () => {
      setIdVerificationModalOpen(false);
      inputEl2.current.open();
   };

   const totalPaidVehicles = () => {
      let count = 0;
      if (filteredVehicles?.length > 0) {
         filteredVehicles.forEach((item) => {
            count = count + item.unit;
         });
      }
      return count;
   };
   const onDelete = (id) => {
      setDeleteId(id);
      deleteRef.current.open();
      // const asyncFunction = () => ;
      // confirmationDialogue({message: "This partner will be deleted parmanently", asyncFunction});
   };

   return (
      <div className="row" style={{ fontSize: "0.8rem" }}>
         <div className="col-sm-6">
            <div className="tab-content px-4">
               <div className="tab-pane active" id="home">
                  <ul className="list-group">
                     {partnerDetails?.partner_data?.account_type === "organization" && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Organisation Name</strong>
                              </span>
                              {partnerDetails?.first_name}
                           </li>
                        </>
                     )}
                     {partnerDetails?.partner_data?.account_type === "individual" && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>First name</strong>
                              </span>
                              {partnerDetails?.first_name}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Last name</strong>
                              </span>
                              {partnerDetails?.last_name}
                           </li>
                        </>
                     )}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Phone number</strong>
                        </span>
                        {partnerDetails?.phone_number}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Email</strong>
                        </span>
                        {partnerDetails?.email}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>{partnerDetails?.partner_data?.account_type === "individual" ? "Home address" : "Office address"}</strong>
                        </span>
                        {partnerDetails?.home_address}
                     </li>
                     {partnerDetails?.partner_data?.account_type === "individual" && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Gender</strong>
                              </span>
                              {partnerDetails?.gender}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>NIN</strong>
                              </span>
                              {partnerDetails?.nin_id?.value}
                           </li>
                        </>
                     )}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Account type</strong>
                        </span>
                        {partnerDetails?.partner_data?.account_type}
                     </li>
                     {partnerDetails?.partner_data?.account_type === "organization" && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Contact person name</strong>
                              </span>
                              {partnerDetails?.partner_data?.next_kin?.name}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Contact person phone number</strong>
                              </span>
                              {partnerDetails?.partner_data?.next_kin?.phone_number}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Contact person email</strong>
                              </span>
                              {partnerDetails?.partner_data?.next_kin?.email}
                           </li>
                        </>
                     )}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Status</strong>
                        </span>
                        <Badge color={partnerDetails?.partner_data?.partner_status === 4 ? "success" : partnerDetails?.partner_data?.partner_status === 2 ? "primary" : "warning"}>
                           {partnerDetails?.partner_data?.partner_status === 4 ? "Approved" : partnerDetails?.partner_data?.partner_status === 2 ? "Verified" : "Pending"}
                        </Badge>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Registration Date</strong>
                        </span>
                        {calculatePostDate(partnerDetails.createdAt)}
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               {partnerDetails?.partner_data?.partner_status === 4 && partnerDetails?.vehicle_data?.length < totalPaidVehicles() && (
                  <Button
                     onClick={() => {
                        setFormData({ ...formData, firstname: partnerDetails?.first_name, lastname: partnerDetails?.last_name, email: partnerDetails?.email });
                        setAddVehicleModal(true);
                     }}
                     className="bg-warning mt-3 text-white"
                  >
                     Assign Vehicle
                  </Button>
               )}
               {partnerDetails?.partner_data?.partner_status === 0 && (
                  <Button
                     onClick={() => {
                        if (partnerDetails?.partner_data?.vehicle_interested?.length === 0) {
                           return NotificationManager.error("Partner must have number of vehicle interested");
                        }
                        if (!partnerDetails?.nin_id?.status) {
                           // return NotificationManager.error("NIN not verified");
                        }
                        inputEl.current.open();
                     }}
                     className="bg-primary mt-3 text-white"
                  >
                     Verify
                  </Button>
               )}

               {partnerDetails?.partner_data?.partner_status === 2 && (
                  <Button
                     onClick={() => {
                        inputEl4.current.open();
                     }}
                     className="bg-success mt-3 text-white"
                  >
                     Approve
                  </Button>
               )}
               {/*{partnerDetails?.partner_data?.partner_status === 2 &&*/}
               {/*    <Button onClick={() => {*/}
               {/*      if(!partnerDetails?.partner_data?.asset_payment?.status) {*/}
               {/*        return NotificationManager.error('Partner must pay cost of asset before approval')*/}
               {/*      }*/}
               {/*      changePartnerStatus(partnerDetails?.auth_id, "4", partnerDetails, emailMessages.approvedPartnerMessage, "Approved")*/}
               {/*    }} className="bg-success mt-3 text-white">*/}
               {/*      Approve*/}
               {/*    </Button>*/}
               {/*}*/}
            </div>
         </div>
         <div className="col-sm-6">
            <div className="tab-content px-4">
               <div className="tab-pane active" id="home">
                  <ul className="list-group">
                     {partnerDetails?.partner_data?.account_type === "individual" && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>State of origin</strong>
                              </span>
                              {partnerDetails?.state}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Occupation</strong>
                              </span>
                              {partnerDetails?.occupation}
                           </li>
                        </>
                     )}

                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Bank name</strong>
                        </span>
                        {partnerDetails?.bank_data?.bank_name}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Account name</strong>
                        </span>
                        {partnerDetails?.bank_data?.account_name}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Account number</strong>
                        </span>
                        {partnerDetails?.bank_data?.account_number}
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Has driver?</strong>
                        </span>
                        {driversCount > 0 ? "Yes" : "No"}
                     </li>
                     {driversCount > 0 && (
                        <>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>No of driver(s)</strong>
                              </span>
                              {driversCount}
                           </li>
                           {/*    <li className="list-group-item text-right">*/}
                           {/*<span className="pull-left">*/}
                           {/*  <strong>Driver(s)</strong>*/}
                           {/*</span>*/}
                           {/*      <Link to={`/admin/partners/partner-drivers`}>*/}
                           {/*        <i className="ti-eye" />*/}
                           {/*      </Link>*/}
                           {/*    </li>*/}
                        </>
                     )}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>Vehicles interested</strong>
                        </span>
                        <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setViModal(true)}>
                           <i className="ti-eye" />
                        </button>
                     </li>
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>No of vehicle(s)</strong>
                        </span>
                        {partnerDetails?.vehicle_data?.length}
                     </li>
                     {/*<li className="list-group-item text-right">*/}
                     {/*  <span className="pull-left">*/}
                     {/*    <strong>Vehicles</strong>*/}
                     {/*  </span>*/}
                     {/*  <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setVehiclesModal(true)}>*/}
                     {/*    <i className="ti-eye" />*/}
                     {/*  </button>*/}
                     {/*</li>*/}
                     <li className="list-group-item text-right">
                        <span className="pull-left">
                           <strong>NIN ID</strong>
                        </span>
                        {partnerDetails?.nin_id?.value}
                        {partnerDetails?.nin_id?.status ? (
                           <i className="ti-check ml-3" />
                        ) : (
                           <Button
                              className={`btn-warning rounded fw-bold p-2 ml-3`}
                              onClick={() =>
                                 partnerDetails?.nin_id?.value
                                    ? triggerIdVerifcation("nin", partnerDetails?.nin_id?.value, partnerDetails?.first_name, partnerDetails?.last_name)
                                    : NotificationManager.error("No provided ID number")
                              }
                           >
                              Run Check
                           </Button>
                        )}
                     </li>
                     {/*<li className="list-group-item text-right">*/}
                     {/*  <span className="pull-left">*/}
                     {/*    <strong>NIN</strong>*/}
                     {/*  </span>*/}
                     {/*  /!*nin_id: {value: '29292929293', status: false}*!/*/}
                     {/*  {partnerDetails?.nin_id?.value}*/}
                     {/*  /!*<button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setVehiclesModal(true)}>*!/*/}
                     {/*  /!*  <i className="ti-eye" />*!/*/}
                     {/*  /!*</button>*!/*/}
                     {/*</li>*/}
                     {partnerDetails?.partner_data?.account_type === "organization" && (
                        <li className="list-group-item text-right">
                           <span className="pull-left">
                              <strong>CAC document</strong>
                           </span>
                           <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setCACModal(true)}>
                              <i className="ti-eye" />
                           </button>
                        </li>
                     )}
                     <li className="list-group-item">
                        <div className="">
                           <Button disabled={loadingStatus} onClick={() => onDelete(partnerDetails?.auth_id)} className="bg-danger mt-3 text-white">
                              Delete Partner
                           </Button>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         {/*Interested vehicles modal*/}
         <Modal isOpen={vIModal} toggle={() => setViModal(!vIModal)}>
            <ModalHeader toggle={() => setViModal(!vIModal)}>Interested vehicles</ModalHeader>
            <ModalBody>
               <Table>
                  <TableHead>
                     <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <Fragment>
                        {partnerDetails?.partner_data?.vehicle_interested?.length > 0 &&
                           partnerDetails?.partner_data?.vehicle_interested.map((data, key) => (
                              <TableRow hover key={key}>
                                 <TableCell>{calculatePostDate(data.createdAt)}</TableCell>
                                 <TableCell>{data.unit}</TableCell>
                                 <TableCell>???{data?.amount?.toLocaleString()}</TableCell>
                                 <TableCell>
                                    <Badge color={data.status === 1 ? "success" : "warning"}>{data.status === 1 ? "Fulfilled" : "Pending"}</Badge>
                                 </TableCell>
                              </TableRow>
                           ))}
                     </Fragment>
                  </TableBody>
               </Table>
            </ModalBody>
         </Modal>

         {/*Vehicles modal*/}
         <Modal isOpen={vehiclesModal} toggle={() => setVehiclesModal(!vehiclesModal)}>
            <ModalHeader toggle={() => setVehiclesModal(!vehiclesModal)}>vehicles</ModalHeader>
            <ModalBody>
               <div className="table-responsive" style={{ minHeight: "50vh" }}>
                  <Table>
                     <TableHead>
                        <TableRow hover>
                           <TableCell>Plate No</TableCell>
                           <TableCell>Serial No</TableCell>
                           <TableCell>Model</TableCell>
                           <TableCell>Year</TableCell>
                           <TableCell>Action</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        <Fragment>
                           {partnerDetails?.vehicle_data?.length > 0 &&
                              partnerDetails?.vehicle_data.map((vehicle, key) => (
                                 <TableRow hover key={key}>
                                    <TableCell>
                                       <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>{vehicle.car_number_plate}</Link>
                                    </TableCell>
                                    <TableCell>{vehicle.car_number}</TableCell>
                                    <TableCell>{vehicle.car_make}</TableCell>
                                    <TableCell>{vehicle.car_model}</TableCell>
                                    <TableCell>
                                       {/*<button type="button" className="rct-link-btn text-primary ml-3" title="view details">*/}
                                       {/*  <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>*/}
                                       {/*    <i className="ti-eye" />*/}
                                       {/*  </Link>*/}
                                       {/*</button>*/}
                                       <Button onClick={() => revokePartnerVehicle(vehicle?._id, vehicle, partnerDetails)} className="bg-danger mt-3 text-white ml-3">
                                          Revoke
                                       </Button>
                                    </TableCell>
                                 </TableRow>
                              ))}
                        </Fragment>
                     </TableBody>
                  </Table>
               </div>
            </ModalBody>
         </Modal>

         {/*add vehicles  modal*/}
         <Modal isOpen={addVehicleModal} toggle={() => setAddVehicleModal(!addVehicleModal)}>
            <ModalHeader toggle={() => setAddVehicleModal(!addVehicleModal)}>Assign Vehicle</ModalHeader>
            <ModalBody>
               <div>
                  <Form
                     onSubmit={(e) => {
                        e.preventDefault();
                        if (!formData?.vehicle?.vehicle_id) {
                           return NotificationManager.error("Select vehicle to continue");
                        }
                        assignVehicleToPartner(formData?.vehicle?.vehicle_id, id, setAddVehicleModal);
                     }}
                  >
                     <FormGroup>
                        <Label for="userName">First Name</Label>
                        <Input onChange={onChange} readOnly={true} type="text" name="firstname" value={firstname} />
                     </FormGroup>
                     <FormGroup>
                        <Label for="userName">Last Name</Label>
                        <Input onChange={onChange} readOnly={true} type="text" name="lastname" value={lastname} />
                     </FormGroup>
                     <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input onChange={onChange} type="email" name="email" readOnly={true} value={email} />
                     </FormGroup>
                     <AsyncSelectComponent partner_assigned_status="0" onChange={onChange} />
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

         {/*CAC document  modal*/}
         <Modal size="lg" isOpen={CACModal} toggle={() => setCACModal(!CACModal)}>
            <ModalHeader toggle={() => setCACModal(!CACModal)}>CAC document</ModalHeader>
            <ModalBody>
               <img
                  src={partnerDetails?.avatar}
                  style={{ width: "100%" }}
               // alt="user profile"
               // className="rounded-circle"
               // width="200"
               // height="200"
               />
            </ModalBody>
            <ModalFooter>
               <Button type="submit" variant="contained" className="text-white btn-success">
                  Download
               </Button>
            </ModalFooter>
         </Modal>

         {/*verify modal*/}
         <DeleteConfirmationDialog
            ref={inputEl}
            title="Are You Sure You want to verify this partner"
            message="This will verify the partner."
            onConfirm={() => {
               changePartnerStatus(partnerDetails?.auth_id, "2", partnerDetails, {}, "Verified");
               inputEl.current.close();
            }}
         />
         <DeleteConfirmationDialog
            ref={inputEl4}
            title="Are You Sure You want to approve this partner"
            message="This partner will become approved."
            onConfirm={() => {
               changePartnerStatus(partnerDetails?.auth_id, "4", partnerDetails, {}, "Approved");
               inputEl4.current.close();
            }}
         />
         <DeleteConfirmationDialog
            ref={deleteRef}
            title="Are You Sure You want to delete this partner"
            message="This partner will be deleted permanently."
            onConfirm={() => {
               deleteUser(deletedId, null, "partner");
               deleteRef.current.close();
            }}
         />

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
                                 {`${verificationResult?.data?.firstname?.toUpperCase() === partnerDetails?.first_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Last Name Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.data?.lastname?.toUpperCase() === partnerDetails?.last_name?.toUpperCase() ? "Yes" : "No"} `}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Phone Number Matches Reg. Details</strong>
                                 </span>
                                 {`${verificationResult?.data?.phone === partnerDetails?.phone_number ? "Yes" : "No"} `}
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
                              <div className="mt-2 text-right">
                                 <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                                    Verify {idVerificationType(idType)}
                                 </button>
                              </div>
                           </ul>
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
         {/*nin verify modal*/}
         <DeleteConfirmationDialog
            ref={inputEl2}
            title="Are You Sure You want to change this partner nin status?"
            message="This will verify the partner nin"
            onConfirm={() => {
               const messageData = {
                  type: "generic",
                  email: partnerDetails.email,
                  name: partnerDetails.first_name,
                  message:
                     "You have been verified and eligible to become a partner on LagosRide, we will advise you on when to make payments. Please do not pay any money into any account, until you have been advised to do so.",
                  phone_number: partnerDetails.phone_number,
                  subject: "Partner Verified",
               };
               verifyPartnerNIN(partnerDetails?.auth_id, "1", idType, messageData);
               inputEl2.current.close();
            }}
         />
      </div>
   );
};

function mapDispatchToProps(dispatch) {
   return {
      assignVehicleToPartner: (vehicle_id, auth_id, setAddVehicleModal) => dispatch(assignVehicleToPartner(vehicle_id, auth_id, setAddVehicleModal)),
      changePartnerStatus: (auth_id, partner_status) => dispatch(changePartnerStatus(auth_id, partner_status)),
      revokePartnerVehicle: (vehicle_id, vehicleDetails, partnerDetails) => dispatch(revokePartnerVehicle(vehicle_id, vehicleDetails, partnerDetails)),
      sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
      verifyPartnerNIN: (auth_id, verification_status, verification_name, messageData) => dispatch(verifyPartnerNIN(auth_id, verification_status, verification_name, messageData)),
      updatePartnerDriverPayment: (auth_id, data, closeDriverPaymentModal) => dispatch(updatePartnerDriverPayment(auth_id, data, closeDriverPaymentModal)),
      deleteUser: (auth_id, users, userType) => dispatch(deleteUser(auth_id, users, userType)),
   };
}

const mapStateToProps = (state) => ({
   partners: state.partners.partners,
   partnersCount: state.partners.partnersCount,
   loading: state.loading.loading,
   loadingStatus: state.loading.loadingStatus,
   driversCount: state.partners.partnerDriversCount,
   fees: state.customerCare.customerCareNumbers,
   dataMode: state.authUser.userProfile.data_mode,
   verificationResult: state.idVerification.verificationResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerProfile);
