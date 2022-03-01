/**
 * Payments
 */
import React, {useState, useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getPayments, getPaymentsCount, getPaymentsService, getPaymentsServiceCount, getPaymentsServiceBalance} from "Actions/paymentAction";
import PaymentServiceTable from "Routes/payments-service/component/paymentServiceTable";
const qs = require("qs");

const SuccessfulPaymentService = ({history, match, getPayments, getPaymentsCount, payments, paymentsCount, getPaymentsServiceBalance}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || payments.length < 1) {
      getPayments(currentPage, 1, "", true);
      getPaymentsCount(1);
      getPaymentsServiceBalance(1);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Service Payments"} match={match} />
      <PaymentServiceTable status={1} header={"Successful Payments"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id, loading)),
    getPaymentsCount: (transaction_status, auth_id) => dispatch(getPaymentsServiceCount(transaction_status, auth_id)),
    getPaymentsServiceBalance: (transaction_status, auth_id, payment_type) => dispatch(getPaymentsServiceBalance(transaction_status, auth_id, payment_type)),
  };
}

const mapStateToProps = (state) => ({
  payments: state.payments.paymentsService,
  paymentsCount: state.payments.paymentsServiceCount,
  isLoading: state.loading.loading,
  sosUserDetails: state.sos.sosUserDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessfulPaymentService);
