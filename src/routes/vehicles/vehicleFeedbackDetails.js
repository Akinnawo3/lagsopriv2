import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import QRCode from "qrcode.react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {Link} from "react-router-dom";
import {assignVehicleFeedback, getVehicleFeedbackDetails, updateVehicleFeedbackStatus} from "Actions/vehicleAction";
import {Badge, Form, Input, Modal, ModalBody, ModalHeader} from "reactstrap";
import Button from "@material-ui/core/Button";
import {calculatePostDate} from "Helpers/helpers";
import {getAdmins} from "Actions";

const VehicleFeedbackDetails = ({getVehicle, match, loading, vehicleDetails, assignVehicleFeedback, loadingStatus, getAdmins, admins, updateVehicleFeedbackStatus}) => {
    const [assignModal, setAssignModal] = useState(false)
    const [statusModal, setStatusModal] = useState(false)
    const [adminId, setAdminId] = useState('')
    const [statusId, setStatusId] = useState(0)
  const inputEl = useRef(null);
  useEffect(() => {
    getVehicle(match.params.id, true);
      getAdmins(1, false)
  }, [match.params.id]);

  const opnRevokeVehicleModal = () => {
    inputEl.current.open();
  };

    const handleChange = (e) => {
        setAdminId(e.target.value);
    };

    const handleChange2 = (e) => {
        setStatusId(e.target.value);
    };

    const handleSubmit = () => {
        setAssignModal(false)
        assignVehicleFeedback(match.params.id, adminId)
    }

    const handleStatus = () => {
        setStatusModal(false)
        updateVehicleFeedbackStatus(match.params.id, statusId)
    }
  return (
    <div className="mb-5" style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Vehicle details</title>
        <meta name="description" content="Vehicle Details" />
      </Helmet>
      <PageTitleBar title={`Vehicle feedback details`} match={match} />
      {!loading && (
        <div className="row" style={{fontSize: "0.8rem"}}>
          <div className="col-sm-6">
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Comment Id</strong>
                    </span>
                    {vehicleDetails?.comment_id}
                  </li>
                    <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Date</strong>
                    </span>
                        {calculatePostDate(vehicleDetails?.createdAt)}
                    </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Comment</strong>
                    </span>
                    {vehicleDetails?.comment}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Name</strong>
                    </span>
                      <Link to={`/admin/drivers/${vehicleDetails?.driver_auth_id}`}>
                          {vehicleDetails?.driver_first_name}  {vehicleDetails?.driver_last_name}
                      </Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Plate No</strong>
                    </span>
                      <Link to={`/admin/vehicles/${vehicleDetails?.vehicle_id}`}>
                          {vehicleDetails?.plate_number}
                      </Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Assigned</strong>
                    </span>
                      <Badge color={vehicleDetails?.assigned ? "success" : "danger"}>{vehicleDetails?.assigned ? "Yes" : "No"}</Badge>
                  </li>
                {vehicleDetails?.assigned &&
                    <>
                        <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Assignee Name</strong>
                            </span>
                            {vehicleDetails?.admin_first_name} {vehicleDetails?.admin_last_name}
                        </li>
                    </>
                }
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Status</strong>
                    </span>
                    <Badge color={vehicleDetails?.status === 1 ? "success" : "warning"}>{vehicleDetails?.status === 1 ? "Resolved" :  "Pending" }</Badge>
                  </li>

                  {/*{vehicleDetails?.assigned && (*/}
                    <li className="list-group-item text-right">
                      <span className="pull-left">
                        <Button
                          disabled={loadingStatus}
                          onClick={() => setAssignModal(true)}
                          className="bg-primary mt-3 text-white"
                        >
                          Assign to Admin
                        </Button>
                          <Button
                              disabled={loadingStatus}
                              onClick={() => setStatusModal(true)}
                              className="bg-success mt-3 text-white ml-3"
                          >
                          Update status
                        </Button>
                      </span>
                    </li>
                  {/*)}*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
        <Modal size="sm" isOpen={assignModal} toggle={() => setAssignModal(!assignModal)}>
            <ModalHeader toggle={() => setAssignModal(!assignModal)}>Assign</ModalHeader>
            <ModalBody>
                <Form>
                    <div className="px-3">
                        <Input type="select"  onChange={handleChange} required>
                            <option value="">
                                --Select Admin --
                            </option>
                            {admins?.map((item, index) => (
                                <option key={index} value={item.auth_id}>
                                    {item.first_name} {item.last_name}
                                </option>
                            ))}
                        </Input>
                    </div>
                    <div className="mt-2 text-right">
                        <button onClick={() => handleSubmit()} type='button' className=" btn rounded btn-primary mt-2">Assign</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
        <Modal size="sm" isOpen={statusModal} toggle={() => setStatusModal(!statusModal)}>
            <ModalHeader toggle={() =>setStatusModal(!statusModal)}>Update Status</ModalHeader>
            <ModalBody>
                <Form>
                    <div className="px-3">
                        <Input type="select"  onChange={handleChange2} required>
                            <option value="">
                                --Select Status --
                            </option>
                            <option value={1}>
                                Resolved
                            </option>
                            <option value={0}>
                                Pending
                            </option>
                        </Input>
                    </div>
                    <div className="mt-2 text-right">
                        <button onClick={() => handleStatus()} type='button' className=" btn rounded btn-primary mt-2">Update</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: (comment_id, spinner) => dispatch(getVehicleFeedbackDetails(comment_id, spinner)),
      assignVehicleFeedback: (comment_id, admin_id) => dispatch(assignVehicleFeedback(comment_id, admin_id)),
      updateVehicleFeedbackStatus: (comment_id, status) => dispatch(updateVehicleFeedbackStatus(comment_id, status)),
      getAdmins: (page_no, spinner) => dispatch(getAdmins(page_no, spinner)),
  };
}

const mapStateToProps = (state) => ({
  vehicleDetails: state.vehicle.vehicleFeedbackDetails,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  driverDetails: state.driver.driver,
    admins: state.admins.admins,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleFeedbackDetails);
