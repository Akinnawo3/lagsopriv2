import React, {Fragment, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {
    calculatePostDate,
    getStatus2,
    getStatus3,
    getStatus4,
    getStatusColor,
    getStatusColor2,
    getStatusColor4
} from "Helpers/helpers";
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import {getPayments, getPaymentsService} from "Actions/paymentAction";
import {Link} from "react-router-dom";




const  PaymentsServiceComponent = ({payments, paymentsCount, auth_id, getPayments, paymentsServiceBalance}) => {
    const [currentPage, setCurrentPage] = useState(1);


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getPayments(pageNumber, '', auth_id)
        window.scrollTo(0, 0);
    };

    return (
        <div style={{minHeight: "70vh"}}>
            <Row className='mb-5'>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-secondary" >
                        <CardBody className="pb-0">
                            <div className="text-value">Total Amount Paid</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                            <span className="pr-2 font-xl" style={{fontSize: '1.5rem'}}>₦{paymentsServiceBalance.toLocaleString()}</span>
                        </div>
                    </Card>
                </Col>

            </Row>
            {payments?.length > 0 &&
            <RctCollapsibleCard>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                {/*<TableCell>Method</TableCell>*/}
                                <TableCell>Amount</TableCell>
                                <TableCell>Date / Time</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {payments.map((user, key) => (
                                    <TableRow hover key={key}>
                                        {/*<TableCell>*/}
                                        {/*    {user.method}*/}
                                        {/*</TableCell>*/}
                                        <TableCell>
                                            ₦{user.amount.toLocaleString()}
                                        </TableCell>
                                        <TableCell>{calculatePostDate(user.createdAt)}</TableCell>
                                        <TableCell>
                                            {user.method}
                                        </TableCell>
                                        <TableCell>
                                            {user.description}
                                        </TableCell>
                                        <TableCell><Badge
                                            color={getStatusColor4(user.status)}>{getStatus4(user.status)}</Badge></TableCell>

                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/payments-service/${user.payment_id}`}><i className="ti-eye"/></Link></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={paymentsCount}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {payments?.length < 1 && <EmptyData />}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getPaymentsService: (pageNo, transaction_status, auth_id) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id)),
    };
}

const mapStateToProps = state => ({
    loading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (PaymentsServiceComponent);
