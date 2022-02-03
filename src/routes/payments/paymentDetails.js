import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getPaymentDetails} from "Actions/paymentAction";
import {calculatePostDate, getStatus3, getStatus4, getStatusColor, getStatusColor4} from "Helpers/helpers";
import {Badge} from "reactstrap";
import {Link} from "react-router-dom";

const PaymentDetails = ({match, payment, getPaymentDetails, sosUserDetails}) => {
  useEffect(() => {
    if (match.params.id) {
      getPaymentDetails(match.params.id);
    }
  }, [match.params.id]);

  return (
    <div className="mb-5" style={{minHeight: "90vh"}}>
      <Helmet>
        <title>Payment Details</title>
        <meta name="description" content="Payment Details" />
      </Helmet>
      <PageTitleBar title={`Payment details`} match={match} />
      <div className="row" style={{fontSize: "0.8rem", minHeight: "90vh"}}>
        <div className="col-sm-6">
          <div className="tab-content">
            <div className="tab-pane active" id="home">
              <ul className="list-group">
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Payment Id</strong>
                  </span>
                  {payment?.payment_id}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Amount</strong>
                  </span>
                  ₦{payment?.amount?.toLocaleString()}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Charge Method</strong>
                  </span>
                  {payment?.charge_method}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Payment Method</strong>
                  </span>
                  {payment?.payment_method}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Ride Class</strong>
                  </span>
                  {payment?.ride_class}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Rider</strong>
                  </span>
                  <Link to={`/admin/passengers/${payment?.rider_id}`}>
                    {payment?.first_name} {payment?.last_name}
                  </Link>
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Rider Phone</strong>
                  </span>
                  {sosUserDetails?.phone_number}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Rider Email</strong>
                  </span>
                  {sosUserDetails?.email}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Trip Id</strong>
                  </span>
                  <Link to={`/admin/trips/${payment?.trip_id}`}>{payment?.trip_id}</Link>
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Trip Class</strong>
                  </span>
                  {payment?.trip_class}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Number of Trails</strong>
                  </span>
                  {payment?.trials}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Date</strong>
                  </span>
                  {calculatePostDate(payment?.createdAt)}
                </li>
                <li className="list-group-item text-right">
                  <span className="pull-left">
                    <strong>Status</strong>
                  </span>
                  <Badge color={getStatusColor4(payment?.status)}>{getStatus4(payment?.status)}</Badge>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPaymentDetails: (payment_id) => dispatch(getPaymentDetails(payment_id)),
  };
}

const mapStateToProps = (state) => ({
  payment: state.payments.payment,
  sosUserDetails: state.sos.sosUserDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails);
