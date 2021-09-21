/**
 * successful Payments
 */
import React, { useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import TripsTable from "Routes/trips/component/tripsTable";
import {getPayments, getPaymentsCount} from "Actions/paymentAction";
import PaymentTable from "Routes/payments/component/paymentTable";


const  SuccessfulPayments = ({match, getPayments, getPaymentsCount, payments, paymentsCount}) => {

    useEffect(()=> {
        getPayments(1, 1, '', true);
        getPaymentsCount()
    },[])


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Trip Payments"} match={match} />
            <PaymentTable status={''} header={'Successful Payments'} />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getPayments: (pageNo, transaction_status, auth_id, loading) => dispatch(getPayments(pageNo, transaction_status, auth_id, loading)),
        getPaymentsCount: (transaction_status, auth_id) => dispatch(getPaymentsCount(transaction_status, auth_id)),
    };
}


const mapStateToProps = state => ({
    payments: state.payments.payments,
    paymentsCount: state.payments.paymentsCount,
    isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (SuccessfulPayments);
