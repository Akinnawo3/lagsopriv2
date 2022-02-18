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
import {calculatePostDate, getStatus4, getStatusColor4} from "Helpers/helpers";
import {Badge} from "reactstrap";
import {getPayments} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
const qs = require("qs");
const PaymentTable = ({payments, paymentsCount, auth_id, getPayments, header, loading}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPayments(pageNumber, "", auth_id);
    window.scrollTo(0, 0);
  };

  //   console.log(payments, "sssss");

  console.log(payments);

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        {!loading && payments?.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Payment Id</TableCell>
                    <TableCell>Trip Reference</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Rider Name</TableCell>
                    <TableCell>Date / Time</TableCell>
                    <TableCell>Charge Method</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {payments.map((item, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{item.payment_id}</TableCell>
                        <TableCell>{item.trip_ref}</TableCell>
                        <TableCell>₦{item.amount.toLocaleString()}</TableCell>
                        <TableCell>{`${item?.first_name} ${item?.last_name}`}</TableCell>
                        <TableCell>{calculatePostDate(item.createdAt)}</TableCell>
                        <TableCell>{item.charge_method}</TableCell>
                        <TableCell>{item.payment_method}</TableCell>
                        <TableCell>
                          <Badge color={getStatusColor4(item.status)}>{getStatus4(item.status)}</Badge>
                        </TableCell>

                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/payments/${item.payment_id}`}>
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
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={paymentsCount} onChange={paginate} />
            </div>
          </div>
        )}
        {!loading && payments?.length < 1 && <EmptyData />}
      </RctCollapsibleCard>
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
  payments: state.payments.payments,
  paymentsCount: state.payments.paymentsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTable);
