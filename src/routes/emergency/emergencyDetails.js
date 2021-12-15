import React, {useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSOSDetails, changeSOStatus, assignSOSToAdmin} from "Actions/emergencyAction";
import {connect} from "react-redux";
import {calculatePostDate} from "Helpers/helpers";
import {Link} from "react-router-dom";
import {Badge, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import moment from "moment";
import {formatTime, getActualAddress} from "Helpers/helpers";
import {verifyUserPermssion} from "../../container/DefaultLayout";

const EmergencyDetails = ({match, loading, sosDetails, getSOSDetails, sosUserDetails, changeSOStatus, assignSOSToAdmin}) => {
  const inputEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");

  useEffect(() => {
    if (match.params.id) {
      getSOSDetails(match.params.id, true);
    }
  }, [match.params.id]);

  const onConfirm = () => {
    changeSOStatus(sosDetails.sos_id, 1);
    inputEl.current.close();
  };
  const assignSOS = (e) => {
    e.preventDefault();
    setIsOpen(false);
    assignSOSToAdmin(adminEmail);
    setAdminEmail("");
  };

  (async () => {
    const res = await getActualAddress(sosDetails?.trip_data?.start_lat, sosDetails?.trip_data?.start_lon);
    setPickupAddress(res);
  })();
  (async () => {
    const res = await getActualAddress(sosDetails?.trip_data?.end_lat, sosDetails?.trip_data?.end_lon);
    setDropOffAddress(res);
  })();

  console.log(sosDetails);
  return (
    <div style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Emmergency</title>
        <meta name="description" content="Driver Profile" />
      </Helmet>
      <PageTitleBar title={"Emergency details"} match={match} />
      {!loading && (
        <div className="row" style={{fontSize: "0.8rem"}}>
          <div className="col-sm-6">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Name</strong>
                    </span>
                    <Link to={sosDetails?.user_data?.user_type === "driver" ? `/admin/drivers/${sosDetails.auth_id}` : `/admin/passengers/${sosDetails?.auth_id}`}>
                      {sosDetails?.user_data?.first_name} {sosDetails?.user_data?.last_name}
                    </Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>User Type</strong>
                    </span>
                    {sosDetails?.user_data?.user_type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Class of Ride</strong>
                    </span>
                    {sosDetails?.trip_data?.ride_class}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Booking type</strong>
                    </span>
                    {sosDetails?.trip_data?.ride_type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Name of Rider</strong>
                    </span>
                    {sosDetails?.user_data?.user_type === "rider" && sosDetails?.user_data?.first_name + " " + sosDetails?.user_data?.last_name}
                  </li>

                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Pickup Location</strong>
                    </span>
                    {pickupAddress === "" ? "loading..." : pickupAddress}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Dropoff Location</strong>
                    </span>
                    {dropOffAddress === "" ? "loading..." : dropOffAddress}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Name </strong>
                    </span>
                    {sosDetails?.user_data?.user_type === "driver" && sosDetails?.user_data?.first_name + " " + sosDetails?.user_data?.last_name}
                  </li>
                  {/* <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Phone</strong>
                    </span>
                    {"     "}
                  </li> */}
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Details</strong>
                    </span>
                    {`${sosDetails?.vehicle_data?.car_color} /  ${sosDetails?.vehicle_data?.car_make} / ${sosDetails?.vehicle_data?.car_model}  ${sosDetails?.vehicle_data?.car_desc}   / Number Plate:  ${sosDetails?.vehicle_data?.car_number_plate}`}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Clip of Incident</strong>
                    </span>
                    {sosDetails?.clip}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Channel of Report</strong>
                    </span>
                    {sosDetails?.channel === "mobile_app" ? "Mobile App" : "Vehicle"}
                  </li>
                  {/* <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>User Phone number</strong>
                    </span>
                    {sosDetails.user_phone_number}
                  </li> */}
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Id</strong>
                    </span>
                    <Link to={`/admin/trips/${sosDetails?.trip_id}`}>{sosDetails.trip_id}</Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Address</strong>
                    </span>
                    {sosDetails?.address}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Latitude</strong>
                    </span>
                    {sosDetails?.latitude}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Longitude</strong>
                    </span>
                    {sosDetails?.longitude}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Date/Time</strong>
                    </span>
                    {moment(sosDetails?.createdAt).format("LLLL")}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Status</strong>
                    </span>
                    <Badge color={sosDetails.status === 0 ? "danger" : "success"}>{sosDetails.status === 0 ? "Unresolved" : "Resolved"}</Badge>
                  </li>
                  {sosDetails.status === 0 && (
                    <div className="mt-3">
                      <button className="btn btn-info mr-4" onClick={() => verifyUserPermssion("update_emergency_status", () => setIsOpen(true))}>
                        Assign to an Admin
                      </button>
                      <button className="btn btn-warning" onClick={() => verifyUserPermssion("update_emergency_status", () => inputEl.current.open())}>
                        Mark as resolved
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <DeleteConfirmationDialog ref={inputEl} title={"Are you sure you want to mark this SOS as resolved?"} message={"Request will be marked as resolved"} onConfirm={onConfirm} />
        </div>
      )}

      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Assign to an Admin</ModalHeader>
        <Form onSubmit={assignSOS}>
          <ModalBody>
            <FormGroup>
              <Label for="Email">Enter Admin Email</Label>
              <Input type="email" name="Email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSOSDetails: (sos_id, spinner) => dispatch(getSOSDetails(sos_id, spinner)),
    changeSOStatus: (sos_id, status) => dispatch(changeSOStatus(sos_id, status)),
    assignSOSToAdmin: (email) => dispatch(assignSOSToAdmin(email)),
  };
}

const mapStateToProps = (state) => ({
  sosDetails: state.sos.sosDetails,
  sosUserDetails: state.sos.sosUserDetails,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyDetails);
