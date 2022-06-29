import React, {Fragment, useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate, getStatus2, getStatus3, getStatus4, getStatusColor, getStatusColor2, getStatusColor4} from "Helpers/helpers";
import {Badge} from "reactstrap";
import {getPayments} from "Actions/paymentAction";
import {Link} from "react-router-dom";

const PaymentsComponent = ({payments, paymentsCount, auth_id, getPayments}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPayments(pageNumber, "", auth_id);
    window.scrollTo(0, 0);
  };

  console.log(payments);
  return (
    <div style={{minHeight: "70vh"}}>
      {payments?.length > 0 && (
        <RctCollapsibleCard>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Payment Id</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Actual Amount</TableCell>
                  <TableCell>Date / Time</TableCell>
                  <TableCell>Payment Method</TableCell>
                  <TableCell>Charge Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {payments.map((user, key) => (
                    <TableRow hover key={key}>
                      <TableCell>{user.payment_id}</TableCell>
                      <TableCell>₦{user.amount.toLocaleString()}</TableCell>
                      <TableCell>₦{user.actual_amount.toLocaleString()}</TableCell>
                      <TableCell>{calculatePostDate(user.createdAt)}</TableCell>
                      <TableCell>{user.payment_method}</TableCell>
                      <TableCell>{calculatePostDate(user.updatedAt)}</TableCell>

                      <TableCell>
                        <Badge color={getStatusColor4(user.status)}>{getStatus4(user.status)}</Badge>
                      </TableCell>

                      <TableCell>
                        <button type="button" className="rct-link-btn text-primary" title="view details">
                          <Link to={`/admin/payments/${user.payment_id}`}>
                            <i className="ti-eye" />
                          </Link>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={paymentsCount} onChange={paginate} />
          </div>
        </RctCollapsibleCard>
      )}
      {payments?.length < 1 && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id) => dispatch(getPayments(pageNo, transaction_status, auth_id)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsComponent);
