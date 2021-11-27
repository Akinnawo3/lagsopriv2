import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {
  getSOSDetails,
  changeSOStatus,
  assignSOSToAdmin,
} from "Actions/emergencyAction";
import { connect } from "react-redux";
import { calculatePostDate } from "Helpers/helpers";
import { Link } from "react-router-dom";
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
  Button,
} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const EmergencyDetails = ({
  match,
  loading,
  sosDetails,
  getSOSDetails,
  sosUserDetails,
  changeSOStatus,
  assignSOSToAdmin,
}) => {
  const inputEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");

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
  return (
    <div style={{ minHeight: "90vh" }}>
      <Helmet>
        <title>Driver Profile</title>
        <meta name="description" content="Driver Profile" />
      </Helmet>
      <PageTitleBar title={"Emergency details"} match={match} />
      {!loading && (
        <div className="row" style={{ fontSize: "0.8rem" }}>
          <div className="col-sm-6">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Name</strong>
                    </span>
                    <Link
                      to={
                        sosDetails?.type === "driver"
                          ? `/admin/drivers/${sosUserDetails.auth_id}`
                          : `/admin/passengers/${sosUserDetails?.auth_id}`
                      }
                    >
                      {sosUserDetails?.first_name} {sosUserDetails?.last_name}
                    </Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>User Type</strong>
                    </span>
                    {sosDetails?.type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Class of Ride</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Booking type</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Name of Rider</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Pickup Location</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Dropoff Location</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Name Location</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver  Phone</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Details</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Clip of Incident</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Channel of Report</strong>
                    </span>
                   {"     "}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>User Phone number</strong>
                    </span>
                    {sosDetails.user_phone_number}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Id</strong>
                    </span>
                    <Link to={`/admin/trips/${sosDetails?.trip_id}`}>
                      {sosDetails.trip_id}
                    </Link>
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
                    {calculatePostDate(sosDetails?.timestamp)}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Status</strong>
                    </span>
                    <Badge
                      color={sosDetails.status === 0 ? "danger" : "success"}
                    >
                      {sosDetails.status === 0 ? "Unresolved" : "Resolved"}
                    </Badge>
                  </li>
                  {sosDetails.status === 0 && (
                    <div className="mt-3">
                      <button
                        className="btn btn-info mr-4"
                        onClick={() => setIsOpen(true)}
                      >
                        Assign to an Admin
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => inputEl.current.open()}
                      >
                        Mark as resolved
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <DeleteConfirmationDialog
            ref={inputEl}
            title={"Are you sure you want to mark this SOS as resolved?"}
            message={"Request will be marked as resolved"}
            onConfirm={onConfirm}
          />
        </div>
      )}

      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>
          Assign to an Admin
        </ModalHeader>
        <Form onSubmit={assignSOS}>
          <ModalBody>
            <FormGroup>
              <Label for="Email">Enter Admin Email</Label>
              <Input
                type="email"
                name="Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              className="text-white btn-success"
            >
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
    getSOSDetails: (sos_id, spinner) =>
      dispatch(getSOSDetails(sos_id, spinner)),
    changeSOStatus: (sos_id, status) =>
      dispatch(changeSOStatus(sos_id, status)),
    assignSOSToAdmin: (email) => dispatch(assignSOSToAdmin(email)),
  };
}

const mapStateToProps = (state) => ({
  sosDetails: state.sos.sosDetails,
  sosUserDetails: state.sos.sosUserDetails,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyDetails);
