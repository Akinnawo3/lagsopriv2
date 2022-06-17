import React, {useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSOSDetails, changeSOStatus, assignSOSToAdmin} from "Actions/emergencyAction";
import {connect} from "react-redux";
import {calculatePostDate} from "Helpers/helpers";
import {Link} from "react-router-dom";
import {Badge, ModalHeader, Modal, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button, Card, CardTitle, CardBody} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {getServiceRequest} from "../../actions/serviceRequestAction";

const MaintenanceDetails = ({match, loading, serviceRequest, getServiceRequest}) => {
  const inputEl = useRef(null);

  useEffect(() => {
    if (match.params.id) {
      getServiceRequest(match.params.id, true);
    }
  }, [match.params.id]);

  const viewedDetail = serviceRequest;

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
                <div className="fw-bold">View Service Request</div>
                <small className="px-3 py-1 rounded capitlize" style={{backgroundColor: "#FCF4E8", color: "#E5870D"}}>
                  {viewedDetail?.status}
                </small>
              </div>
              <div className="modals-grid col col-md-7">
                
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getServiceRequest: (sos_id, spinner) => dispatch(getServiceRequest(sos_id, spinner)),
  };
}

const mapStateToProps = (state) => ({
  serviceRequest: state.serviceRequests.serviceRequest,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceDetails);
