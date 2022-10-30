import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { Link, useLocation } from "react-router-dom";
import { getVehicle, getVehicleMileage, revokeVehicle, updatePartnerDriverPayment, updateVehicleMileage } from "Actions/vehicleAction";
import { Badge, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import download from "downloadjs";
import { calculatePostDate, fullDateTime } from "../../helpers/helpers";
export let onMileageModalClose;

const VehicleDetails = ({
   getVehicle,
   match,
   loading,
   vehicleDetails,
   driverDetails,
   loadingStatus,
   revokeVehicle,
   getVehicleMileage,
   vehicleMileage,
   updatePartnerDriverPayment,
   updateVehicleMileage,
}) => {
   const [driverPaymentModal, setDriverPaymentModal] = useState(false);
   const [partner_driver_payment, setPartner_driver_payment] = useState({ type: "", driver_payment: "" });
   const [mileageModal, setMileageModal] = useState(false);
   const [mileageValue, setMileageValue] = useState();
   const partnerVehicles = vehicleDetails?.partner_driver_payment?.length > 0 ? vehicleDetails?.partner_driver_payment[vehicleDetails?.partner_driver_payment?.length - 1] : {}

   const location = useLocation();
   const inputEl = useRef(null);
   const { driver_id, partner_id } = location?.state || {};

   useEffect(() => {
      getVehicle(match.params.id, true, driver_id || "", partner_id || "");
      // getVehicleMileage(match.params.id, true);
   }, [match.params.id]);

   const opnRevokeVehicleModal = () => {
      inputEl.current.open();
   };
   const downloadQRCode = () => {
      // const qrCodeURL = "data:application/octet-stream;base64," + vehicleDetails?.qr_code;
      download(vehicleDetails?.qr_code, "QR_code.png", "image/png");
   };

   const closeDriverPaymentModal = () => {
      setDriverPaymentModal(false);
   };

   onMileageModalClose = () => {
      setMileageModal(false);
   };

   useEffect(() => {
      if (vehicleDetails?.partner_driver_payment?.length > 0) {
         setPartner_driver_payment({ type: partnerVehicles?.type, driver_payment: partnerVehicles?.driver_payment });
      }
   }, [vehicleDetails?.car_number_plate]);

   driverDetails = vehicleDetails?.driver_data?.length ? vehicleDetails.driver_data[0] : {}

   return (
      <div className="mb-5" style={{ minHeight: "90vh" }}>
         <Helmet>
            <title>Vehicle details</title>
            <meta name="description" content="Vehicle Details" />
         </Helmet>
         <PageTitleBar title={`Vehicle details`} match={match} />
         {!loading && (
            <div className="row" style={{ fontSize: "0.8rem" }}>
               <div className="col-sm-6">
                  <div className="tab-content px-4">
                     <div className="tab-pane active" id="home">
                        <ul className="list-group">
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Id</strong>
                              </span>
                              {vehicleDetails?.vehicle_id}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Serial Number </strong>
                              </span>
                              {vehicleDetails?.car_number}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Plate No</strong>
                              </span>
                              {vehicleDetails?.car_number_plate}
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
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Color</strong>
                              </span>
                              {vehicleDetails?.car_color}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Purchase Year</strong>
                              </span>
                              {vehicleDetails?.purchase_year}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Chassis Number</strong>
                              </span>
                              {vehicleDetails?.chassis_number}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Engine Number</strong>
                              </span>
                              {vehicleDetails?.engine_number}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Vehicle Mileage</strong>
                              </span>
                              {vehicleDetails?.mileage}
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong> Mileage last update</strong>
                              </span>
                              {fullDateTime(vehicleDetails?.mileage_updated_at).fullDateTime}
                           </li>
                           {/*purchase_year, chassis_number, engine_number*/}

                           {/*<li className="list-group-item text-right"><span*/}
                           {/*    className="pull-left"><strong>Vehicle Description</strong></span>{vehicleDetails?.car_desc}*/}
                           {/*</li>*/}
                           {driverDetails?._id && (
                              <>
                                 <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>Driver Name</strong>
                                    </span>
                                    <Link to={`/admin/drivers/${driverDetails?._id}`}>
                                       {driverDetails?.first_name} {driverDetails.last_name}
                                    </Link>
                                 </li>
                                 {/* <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>Driver Email</strong>
                                    </span>
                                    {driverDetails?.email}
                                 </li>
                                 <li className="list-group-item text-right">
                                    <span className="pull-left">
                                       <strong>Driver Phone Number</strong>
                                    </span>
                                    {driverDetails?.phone_number}
                                 </li> */}
                                 {vehicleDetails?.proxy_data?.length > 0 &&
                                    <li className="list-group-item text-right">
                                       <span className="pull-left">
                                          <strong>Proxy Driver</strong>
                                       </span>
                                       <Link to={`/admin/drivers/${vehicleDetails?.proxy_data[0]?.proxy_id}`}>
                                          CLICK TO SEE
                                       </Link>
                                    </li>
                                 }
                              </>
                           )}
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Driver Status</strong>
                              </span>
                              <Badge color={vehicleDetails?.assigned ? "success" : "danger"}>{vehicleDetails?.assigned ? "Assigned" : "Unassigned"}</Badge>
                           </li>
                           <li className="list-group-item text-right">
                              <span className="pull-left">
                                 <strong>Partner Status</strong>
                              </span>
                              <Badge color={vehicleDetails?.partner_assigned ? "success" : "danger"}>{vehicleDetails?.partner_assigned ? "Assigned" : "Unassigned"}</Badge>
                           </li>
                           {vehicleDetails?.partner_data && (
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Partner Name</strong>
                                 </span>
                                 <Link to={`/admin/partners/${vehicleDetails?.partner_data[0]?._id}`}>
                                    {vehicleDetails?.partner_data[0]?.first_name} {vehicleDetails?.partner_data[0]?.last_name}
                                 </Link>
                              </li>
                           )}
                           <li className="list-group-item text-right">
                              <div className="d-flex justify-content-between align-items-start ">
                                 <strong>QR Code</strong>
                                 <div className="d-flex flex-column">
                                    <img id="qrCodeEl" src={vehicleDetails?.qr_code ? vehicleDetails.qr_code : ""} />
                                    <Button onClick={downloadQRCode} className="bg-primary mt-1 text-white btn-md">
                                       Download
                                    </Button>
                                 </div>
                              </div>
                           </li>

                           <li className="list-group-item text-right d-flex">
                              <span className="mr-2">
                                 <Button
                                    disabled={loadingStatus}
                                    onClick={() => {
                                       setMileageValue(vehicleDetails?.mileage);
                                       setMileageModal(true);
                                    }}
                                    className="bg-info mt-3 text-white"
                                 >
                                    Update Mileage
                                 </Button>
                              </span>
                              {vehicleDetails?.assigned && (
                                 <span className="pull-left">
                                    <Button
                                       disabled={loadingStatus}
                                       onClick={() => {
                                          opnRevokeVehicleModal();
                                       }}
                                       className="bg-danger mt-3 text-white"
                                    >
                                       Revoke
                                    </Button>
                                 </span>
                              )}
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               {vehicleDetails?.partner_assigned && (
                  <div className="col-sm-6">
                     <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                           <ul className="list-group">
                              <li className="list-group-item text-right">
                                 <span className="pull-left" style={{ fontSize: "20px" }}>
                                    <strong>Driver's Partner payment</strong>
                                 </span>
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>Type</strong>
                                 </span>
                                 {partnerVehicles?.type ?? "NA"}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong>{partnerVehicles?.type === "percent" ? "Percentage" : "Amount"}</strong>
                                 </span>
                                 {partnerVehicles?.type === "fixed" && "₦"}
                                 {partnerVehicles?.type === "fixed"
                                    ? parseInt(partnerVehicles?.driver_payment)?.toLocaleString()
                                    : partnerVehicles?.type === "percent"
                                       ? partnerVehicles?.driver_payment
                                       : "NA"}
                                 {partnerVehicles?.type === "percent" && "%"}
                              </li>
                              <li className="list-group-item text-right">
                                 <span className="pull-left">
                                    <strong></strong>
                                 </span>
                                 <button type="button" className="btn btn-success text-white" title="view details" onClick={() => setDriverPaymentModal(true)}>
                                    change
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         )}

         {/*partner driver payment*/}
         <Modal isOpen={driverPaymentModal} toggle={() => setDriverPaymentModal(!driverPaymentModal)}>
            <ModalHeader toggle={() => setDriverPaymentModal(!driverPaymentModal)}>Driver's Payment</ModalHeader>
            <ModalBody>
               <div>
                  <Form
                     onSubmit={(e) => {
                        e.preventDefault();
                        updatePartnerDriverPayment({ ...vehicleDetails, partner_driver_payment: partner_driver_payment }, match?.params?.id, setDriverPaymentModal);
                        // updatePartnerDriverPayment(id, {user_type: 'partner', first_name: partnerDetails?.first_name, last_name: partnerDetails?.last_name, partner_driver_payment}, closeDriverPaymentModal)
                     }}
                  >
                     <FormGroup>
                        <Label>Type</Label>
                        <Input type="select" value={partner_driver_payment?.type} onChange={(e) => setPartner_driver_payment({ ...partner_driver_payment, type: e.target.value })} required>
                           <option value="">Select</option>
                           <option value="fixed">Fixed</option>
                           <option value="percent">Percent</option>
                        </Input>
                     </FormGroup>
                     <FormGroup>
                        <Label for="text">{partner_driver_payment?.type === "fixed" ? "Amount" : "Percentage"}</Label>
                        <Input type="number" value={partner_driver_payment?.driver_payment} onChange={(e) => setPartner_driver_payment({ ...partner_driver_payment, driver_payment: e.target.value })} required />
                     </FormGroup>

                     {/* <AsyncSelect cacheOptions defaultOptions loadOptions={() => [{label: "one", value: 1},{label: "two", value: 2}]} onChange={() => null} />; */}
                     <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">
                           Change
                        </Button>
                     </ModalFooter>
                  </Form>
               </div>
            </ModalBody>
         </Modal>
         {/*Modal to update vehicle Mileage*/}
         <Modal isOpen={mileageModal} toggle={() => setMileageModal(!mileageModal)}>
            <ModalHeader toggle={() => setMileageModal(!mileageModal)}>Update Vehicle Mileage</ModalHeader>
            <ModalBody>
               <div>
                  <Form
                     onSubmit={(e) => {
                        e.preventDefault();
                        updateVehicleMileage({ vehicle_id: vehicleDetails?.vehicle_id, oem_vehicle_id: vehicleDetails?.oem_vehicle_id, mileage: mileageValue.toString() });
                        // updatePartnerDriverPayment(id, {user_type: 'partner', first_name: partnerDetails?.first_name, last_name: partnerDetails?.last_name, partner_driver_payment}, closeDriverPaymentModal)
                     }}
                  >
                     <FormGroup>
                        <Label for="text">Enter Mileage value (Miles)</Label>
                        <Input type="number" min={0} value={mileageValue} onChange={(e) => setMileageValue(e.target.value)} required />
                     </FormGroup>
                     {/* <AsyncSelect cacheOptions defaultOptions loadOptions={() => [{label: "one", value: 1},{label: "two", value: 2}]} onChange={() => null} />; */}
                     <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">
                           Submit
                        </Button>
                     </ModalFooter>
                  </Form>
               </div>
            </ModalBody>
         </Modal>
         <DeleteConfirmationDialog
            ref={inputEl}
            title="Are You Sure you Want To revoke vehicle assignment?"
            message="This will unassigned vehicle from driver."
            onConfirm={() => {
               revokeVehicle(vehicleDetails?.vehicle_id, vehicleDetails, driverDetails);
               inputEl.current.close();
            }}
         />
      </div>
   );
};

function mapDispatchToProps(dispatch) {
   return {
      getVehicle: (vehicle_id, spinner, driver_id, partner_id) => dispatch(getVehicle(vehicle_id, spinner, driver_id, partner_id)),
      getVehicleMileage: (vehicle_id, spinner) => dispatch(getVehicleMileage(vehicle_id, spinner)),
      revokeVehicle: (vehicle_id, vehicleDetails, driverDetails) => dispatch(revokeVehicle(vehicle_id, vehicleDetails, driverDetails)),
      updatePartnerDriverPayment: (data, vehicle_id, setDriverPaymentModal) => dispatch(updatePartnerDriverPayment(data, vehicle_id, setDriverPaymentModal)),
      updateVehicleMileage: (data) => dispatch(updateVehicleMileage(data)),
   };
}

const mapStateToProps = (state) => ({
   vehicleDetails: state.vehicle.vehicleDetails,
   vehicleMileage: state.vehicle.vehicleMileage,
   loading: state.loading.loading,
   loadingStatus: state.loading.loadingStatus,
   // driverDetails: state.vehicle?.vehicleDetails?.driver_data,
   // driverDetails: state.driver.driver,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails);
