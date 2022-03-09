import React, {useEffect, useState} from "react";
import {Badge, Modal, ModalBody, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSingleWalletTransaction} from "Actions/walletAction";
import {formatTime} from "Helpers/helpers";
import {Link} from "react-router-dom";

const WalletDetails = ({getSingleWalletTransaction, match, loading, trip}) => {
  useEffect(() => {
    getSingleWalletTransaction(match.params.id, true);
  }, [match.params.id]);

  return (
    <div className="mb-5" style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Trip Details</title>
        <meta name="description" content="Wallet Transaction Details" />
      </Helmet>
      <PageTitleBar title={`Transaction details`} match={match} />
      {!loading && (
        <div className="row" style={{fontSize: "0.8rem"}}>
          <div className="col-sm-6">
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  {/* <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Id</strong>
                    </span>
                    {trip?.trip_id}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Class</strong>
                    </span>
                    {trip?.ride_class}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Type</strong>
                    </span>
                    {trip?.ride_type}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Name</strong>
                    </span>
                    <Link to={`/admin/drivers/${trip?.driver_data?.driver_id}`}>{trip?.driver_data?.name}</Link>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Email</strong>
                    </span>
                    {trip?.driver_data?.email}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Driver Phone Number</strong>
                    </span>
                    {trip?.driver_data?.phone}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Plate Number</strong>
                    </span>
                    {trip?.driver_data?.car_number_plate}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Vehicle Model</strong>
                    </span>
                    {trip?.driver_data?.car_model}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Trip Status</strong>
                    </span>
                    <Badge color={trip?.ride_status === "completed" ? "success" : trip?.ride_status === "cancel" ? "danger" : trip?.ride_status === "waiting" ? "warning" : "secondary"}>
                      {trip?.ride_status === "on_trip" ? "current" : trip?.ride_status === "on_pickup" ? "on route" : trip?.ride_status}
                    </Badge>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left" style={{fontSize: "1rem"}}>
                      <strong>Rider(s)</strong>
                    </span>
                    {trip?.home_area}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSingleWalletTransaction: (tansaction_id, spinner) => dispatch(getSingleWalletTransaction(transaction_id, spinner)),
  };
}

const mapStateToProps = (state) => ({
  trip: state.trips.trip,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDetails);
