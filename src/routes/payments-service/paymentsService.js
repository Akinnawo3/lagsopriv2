/**
 * Payments
 */
import React, { useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getPayments, getPaymentsCount, getPaymentsService, getPaymentsServiceCount} from "Actions/paymentAction";
import PaymentServiceTable from "Routes/payments-service/component/paymentServiceTable";


const  PaymentsService = ({match, getPayments, getPaymentsCount, payments, paymentsCount}) => {

    useEffect(()=> {
        getPayments(1, '', '', true);
        getPaymentsCount()
    },[])


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Service Payments"} match={match} />
            <PaymentServiceTable status={''} header={'All Payments'} />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getPayments: (pageNo, transaction_status, auth_id, loading) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id, loading)),
        getPaymentsCount: (transaction_status, auth_id) => dispatch(getPaymentsServiceCount(transaction_status, auth_id)),
    };
}


const mapStateToProps = state => ({
    payments: state.payments.paymentsService,
    paymentsCount: state.payments.paymentsServiceCount,
    isLoading: state.loading.loading,
    sosUserDetails: state.sos.sosUserDetails,
});

export default connect( mapStateToProps, mapDispatchToProps) (PaymentsService);
