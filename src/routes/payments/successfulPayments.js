/**
 * Payments
 */
import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getPayments, getPaymentsCount} from "Actions/paymentAction";
import PaymentTable from "Routes/payments/component/paymentTable";
const qs = require("qs");

const SuccessfulPayments = ({history, match, getPayments, getPaymentsCount, payments, paymentsCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    // pageNo, transaction_status, auth_id, loading
    if (pageFromQuery === undefined || payments.length < 1) {
      getPayments(currentPage, 1, "", true);
      getPaymentsCount(1);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Trip Payments"} match={match} />
      <PaymentTable status={1} header={"Successful Payments"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading) => dispatch(getPayments(pageNo, transaction_status, auth_id, loading)),
    getPaymentsCount: (transaction_status, auth_id) => dispatch(getPaymentsCount(transaction_status, auth_id)),
  };
}

const mapStateToProps = (state) => ({
  payments: state.payments.payments,
  paymentsCount: state.payments.paymentsCount,
  isLoading: state.loading.loading,
  sosUserDetails: state.sos.sosUserDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessfulPayments);
