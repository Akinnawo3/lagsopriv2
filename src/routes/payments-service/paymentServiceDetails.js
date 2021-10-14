import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getPaymentServiceDetails} from "Actions/paymentAction";
import {calculatePostDate, getStatusColor4} from "Helpers/helpers";
import {Badge} from "reactstrap";
import {Link} from "react-router-dom";



const PaymentServiceDetails = ({match, payment, getPaymentDetails})=> {

    useEffect(() => {
        if (match.params.id){
            getPaymentDetails(match.params.id)
        }
    },[match.params.id])


    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>Payment Service Details</title>
                <meta name="description" content="Payment Service Details" />
            </Helmet>
            <PageTitleBar title={`Payment Service details`} match={match}  />
        <div className="row" style={{fontSize: '0.8rem', minHeight: '90vh'}}>
            <div className="col-sm-6">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Payment Id</strong></span>{payment?.payment_id}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Amount</strong></span>₦{payment?.amount?.toLocaleString()}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Method</strong></span>{payment?.payment_method}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Payment Type</strong></span>{payment?.payment_type}
                            </li>
                            {payment?.user_data?.length > 0 &&
                                <>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>User Name</strong></span><Link to={payment?.user_data[0].user_type === 'driver' ? `/admin/drivers/${payment?.auth_id}` : `/admin/passengers/${payment?.auth_id}`}>{payment?.user_data[0]?.first_name} {payment?.user_data[0]?.last_name}</Link>
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>User Type</strong></span>{payment?.user_data[0].user_type}
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>User Phone</strong></span>{payment?.user_data[0].phone_number}
                                    </li>
                                    <li className="list-group-item text-right"><span
                                        className="pull-left"><strong>User Email</strong></span>{payment?.user_data[0]?.email}
                                    </li>
                                </>
                            }
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Description</strong></span>{payment?.description}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Date</strong></span>{calculatePostDate(payment?.createdAt)}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Status</strong></span><Badge
                                color={getStatusColor4(payment?.status)}>{getStatusColor4(payment?.status)}</Badge>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getPaymentDetails: (payment_id) => dispatch(getPaymentServiceDetails(payment_id)),
    };
}

const mapStateToProps = state => ({
    payment: state.payments.paymentServiceDetails,
    sosUserDetails: state.sos.sosUserDetails,



});

export default connect( mapStateToProps, mapDispatchToProps) (PaymentServiceDetails)
