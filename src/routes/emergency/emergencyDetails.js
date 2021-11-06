import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { getSOSDetails, changeSOStatus } from "Actions/emergencyAction";
import { connect } from "react-redux";
import { calculatePostDate } from "Helpers/helpers";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const EmergencyDetails = ({
  match,
  loading,
  sosDetails,
  getSOSDetails,
  sosUserDetails,
  changeSOStatus,
}) => {
  const inputEl = useRef(null);
  useEffect(() => {
    if (match.params.id) {
      getSOSDetails(match.params.id, true);
    }
  }, [match.params.id]);

  const onConfirm = () => {
    changeSOStatus(sosDetails.sos_id, 1);
    inputEl.current.close();
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
                      <button className="btn btn-info mr-4">
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
            title={"Are you sure you want to Mark This SOS as resolved?"}
            message={"Request will be marked as resolved"}
            onConfirm={onConfirm}
          />
        </div>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSOSDetails: (sos_id, spinner) =>
      dispatch(getSOSDetails(sos_id, spinner)),
    changeSOStatus: (sos_id, status) =>
      dispatch(changeSOStatus(sos_id, status)),
  };
}

const mapStateToProps = (state) => ({
  sosDetails: state.sos.sosDetails,
  sosUserDetails: state.sos.sosUserDetails,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyDetails);
