/**
 * Payments
 */
import React, {useState, useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getPayments, getPaymentsCount, getPaymentsService, getPaymentsServiceCount} from "Actions/paymentAction";
import PaymentServiceTable from "Routes/payments-service/component/paymentServiceTable";
const qs = require("qs");

const PaymentsService = ({history, match, getPayments, getPaymentsCount, payments, paymentsCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || payments.length < 1) {
      getPayments(currentPage, "", "", true);
      getPaymentsCount("");
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Service Payments"} match={match} />
      <PaymentServiceTable status={""} header={"All Payments"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading, payment_type) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id, loading, payment_type)),
    getPaymentsCount: (transaction_status, auth_id, payment_type) => dispatch(getPaymentsServiceCount(transaction_status, auth_id, payment_type)),
  };
}

const mapStateToProps = (state) => ({
  payments: state.payments.paymentsService,
  paymentsCount: state.payments.paymentsServiceCount,
  isLoading: state.loading.loading,
  sosUserDetails: state.sos.sosUserDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsService);
