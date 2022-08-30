import React, {useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSOSDetails, changeSOStatus, assignSOSToAdmin} from "Actions/emergencyAction";
import {connect} from "react-redux";
import {calculatePostDate} from "Helpers/helpers";
import {Link} from "react-router-dom";
import {Badge, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button, Card, CardTitle, CardBody} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {getServiceRequest, updateServiceRequest} from "../../actions/serviceRequestAction";
import {fullDateTime} from "../../helpers/helpers";

const MaintenanceDetails = ({match, location, loading, serviceRequest, getServiceRequest, updateServiceRequest}) => {
  const inputEl = useRef(null);
  const [imageModal, setImageModal] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const showImages = (images) => {
    setImageSrc(images);
    setImageModal(true);
  };

  const approveRequest = () => {
    setTitle("Approve service request");
    setMessage("Service request will be approved");
    setApprovalStatus("approve");
    inputEl.current.open();
  };

  const onConfirm = () => {
    if (approvalStatus === "approve") {
      updateServiceRequest(match.params.id, {status: "approved"});
    }
    inputEl.current.close();
  };

  useEffect(() => {
    if (match.params.id) {
      getServiceRequest(match.params.id, true);
    }
  }, [match.params.id]);

  const viewedDetail = serviceRequest;

  const maintenanceHistory = location?.state?.maintenanceHistory;

  return (
    <div style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Driver Profile</title>
        <meta name="description" content="Service Requests" />
      </Helmet>
      <PageTitleBar title={"Service request details"} match={match} />
      {!loading && (
        <Card>
          <CardTitle></CardTitle>
          <CardBody>
            <div>
              <div className="d-flex justify-content-between mb-4">
                <div className="fw-bold"> Service Request Details</div>
                <small className="px-3 py-1 rounded capitlize" style={{backgroundColor: "#FCF4E8", color: "#E5870D"}}>
                  {viewedDetail?.status === "awaiting-approval" ? "Awaiting Approval" : viewedDetail?.status}
                </small>
              </div>
              <div className="modals-grid col col-md-7">
                <div className="">
                  <small>Request Type</small>
                  <div className="capitlize">{viewedDetail?.service_type}</div>
                </div>
                {viewedDetail?.image && (
                  <div className="">
                    <small>Image where applicable</small>
                    <div style={{color: "#5D92F4"}}>
                      <u onClick={() => showImages(viewedDetail?.image)}>view image</u>
                    </div>
                  </div>
                )}
                {viewedDetail?.description && (
                  <div className="">
                    <small>Description</small>
                    <div>{viewedDetail?.description}</div>
                  </div>
                )}
                {viewedDetail?.measures && (
                  <div className="">
                    <small>Measures taken</small>
                    <div>{viewedDetail?.measures}</div>
                  </div>
                )}
                <div className="">
                  <small>Service center assigned to</small>
                  <div className="capitlize"> {viewedDetail?.service_center_name}</div>
                </div>
                <div className="">
                  <small>Driver name</small>
                  <div>{viewedDetail?.driver_name}</div>
                </div>
                {viewedDetail?.service_type !== "maintenance" && (
                  <div className="">
                    <small>Urgency</small>
                    <div className={`${viewedDetail?.urgency === "high" ? "text-danger" : "text-warning"} capitlize fw-bold `}>{viewedDetail?.urgency}</div>
                  </div>
                )}
                <div className="">
                  <small>Vehice Model</small>
                  <div className="capitlize">{viewedDetail?.vehicle_model}</div>
                </div>
                <div className="">
                  <small>Time of request</small>
                  <div>{fullDateTime(viewedDetail?.createdAt).fullDateTime}</div>
                </div>
                {viewedDetail?.status === "rejected" && (
                  <div className="">
                    <small>Rejection reason</small>
                    <div className="text-danger">{viewedDetail?.reason}</div>
                  </div>
                )}
                {viewedDetail?.status === "accepted" && (
                  <div className="">
                    <small>Service center availability time</small>
                    <div className="">{fullDateTime(viewedDetail?.availabily_date).fullDateTime}</div>
                  </div>
                )}

                <div className="">
                  <small>Covered by warranty</small>
                  <div className={`${viewedDetail?.covered_by_warranty ? "Text-primary" : "text-danger"} fw-bold`}>{viewedDetail?.covered_by_warranty ? "Yes" : "No"}</div>
                </div>
                <div className="">
                  <small>Plate number</small>
                  <div>{viewedDetail?.plate_number}</div>
                </div>
                {!maintenanceHistory && (
                  <div className="">
                    <small>Vehice maintenance and Repairs history</small>
                    <div style={{color: "#5D92F4"}}>
                      <Link to={`/admin/maintenance/history/${viewedDetail?.vehicle_id}`} style={{textDecoration: "none"}}>
                        <u>view maintenance history</u>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              {viewedDetail?.status !== "pending" && viewedDetail?.status !== "accepted" && viewedDetail?.status !== "rejected" && (
                <>
                  <div className="mt-4">
                    <small className="text-primary">DIAGNOSTIC INFORMATION</small>{" "}
                  </div>
                  <div className="mt-3">Diagnostic activity carried out </div>
                  <div className="mt-2">{viewedDetail?.diagnostics_data?.diagnostics_act}</div>

                  {viewedDetail?.status === "completed" && (
                    <>
                      <div className="mt-3">Specific activity carried out </div>
                      <div className="mt-2">{viewedDetail?.diagnostics_data?.specific_act}</div>

                      <div className="mt-3">Recommendation </div>
                      <div className="mt-2">{viewedDetail?.diagnostics_data?.recommendation}</div>
                    </>
                  )}

                  <div className="mt-4">
                    <div className="modals-grid col col-md-7">
                      {viewedDetail?.status !== "completed" && (
                        <>
                          {viewedDetail?.start_time && (
                            <div className="">
                              <small>Start time</small>
                              <div className="capitlize">{fullDateTime(viewedDetail?.start_time).fullDateTime}</div>
                            </div>
                          )}

                          {viewedDetail?.completion_time && (
                            <div className="">
                              <small>Discharge time</small>
                              <div className="capitlize">{fullDateTime(viewedDetail?.completion_time).fullDateTime}</div>
                            </div>
                          )}
                        </>
                      )}

                      {viewedDetail?.diagnostics_data?.before_images.length > 0 && (
                        <div className="">
                          <small>Before images</small>
                          <div className="py-2 px-3 rounded d-flex justify-content-between" style={{backgroundColor: "#F5F5F5"}}>
                            <small>Image file</small>
                            <div className="text-teal">
                              <u className="cursor-pointer" onClick={() => showImages(viewedDetail?.diagnostics_data?.before_images)}>
                                View
                              </u>
                            </div>
                          </div>
                        </div>
                      )}

                      {viewedDetail?.status !== "completed" && (
                        <>
                          {viewedDetail?.diagnostics_data?.after_images.length > 0 && (
                            <div className="">
                              <small>After images</small>
                              <div className="py-2 px-3 rounded d-flex justify-content-between" style={{backgroundColor: "#F5F5F5"}}>
                                <small>image file</small>
                                <div className="text-teal">
                                  <u className="cursor-pointer" onClick={() => showImages(viewedDetail?.diagnostics_data?.after_images)}>
                                    View
                                  </u>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="">
                            <small>Rep name</small>
                            <div className="capitlize">{viewedDetail?.diagnostics_data?.name}</div>
                          </div>
                          {viewedDetail?.diagnostics_data?.signature && (
                            <div className="">
                              <small>Rep signature</small>
                              <div className="py-2 px-3 rounded d-flex justify-content-between" style={{backgroundColor: "#F5F5F5"}}>
                                <small>image file</small>
                                <div className="text-teal">
                                  <u onClick={() => showImages(viewedDetail?.diagnostics_data?.signature)}>View</u>
                                </div>
                              </div>
                            </div>
                          )}

                          {viewedDetail?.invoice && (
                            <div className="">
                              <small>Invoice</small>
                              <div className="py-2 px-3 rounded d-flex justify-content-between" style={{backgroundColor: "#F5F5F5"}}>
                                <small>image file</small>
                                <div className="text-teal">
                                  <u>
                                    <a href={viewedDetail?.invoice} download>
                                      Download Invoice
                                    </a>
                                  </u>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
              {viewedDetail?.status === "awaiting-approval" && (
                <div className="d-flex mt-5">
                  <Button className="cursor-pointer btn-success" onClick={approveRequest}>
                    Approve
                  </Button>
                  {/* <Button className="cursor-pointer btn-danger ml-2" onClick={() => setServiceCenterModal(true)}>
                    Decline
                  </Button> */}
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      )}
      {/* image modal */}
      <Modal isOpen={imageModal} toggle={() => setImageModal(false)} size="md" scrollable>
        {/* <ModalHeader toggle={() => setImageModal(false)}>
          <div className="">
            <div>view image</div>
          </div>
        </ModalHeader> */}
        <ModalBody className="text-center">{imageSrc !== "" && <img src={imageSrc} style={{maxWidth: "100%"}} />}</ModalBody>
      </Modal>
      <DeleteConfirmationDialog ref={inputEl} title={title} message={message} onConfirm={onConfirm} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getServiceRequest: (sos_id, spinner) => dispatch(getServiceRequest(sos_id, spinner)),
    updateServiceRequest: (body) => dispatch(updateServiceRequest(body)),
  };
}

const mapStateToProps = (state) => ({
  serviceRequest: state.serviceRequests.serviceRequest,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceDetails);
