import React, {Fragment, useRef, useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
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
  getStatusColor4,
  getTodayDate
} from "Helpers/helpers";
import {Badge, Button} from "reactstrap";
import {getPayments, getPaymentsCount, getPaymentsExport} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const PaymentsComponent = ({payments, paymentsCount, auth_id, getPayments, getPaymentsCount, getPaymentsExport}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exportRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPayments(pageNumber, "", auth_id);
    window.scrollTo(0, 0);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getPaymentsExport('', auth_id, "rider_id", startDate, endDate);
  };

  const applyFilter = () => {
    getPayments(1, '', auth_id, false, 'rider_id', startDate, endDate);
    getPaymentsCount('', auth_id, 'rider_id', startDate, endDate)
  };

  return (
    <div style={{minHeight: "70vh"}}>
      <div>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">From</small>
          <input type="date" id="start" name="wallet-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input type="date" id="start" name="wallet-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <button className="btn btn-primary text-white" onClick={applyFilter}>
            Apply Filter
          </button>
        </li>
        <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2 float-right text-white" color="primary">
          {" "}
          <i className="zmdi zmdi-download mr-2"></i> Export to Excel
        </Button>
      </div>
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
                      <TableCell>₦{user.amount?.toLocaleString()}</TableCell>
                      <TableCell>₦{user.actual_amount?.toLocaleString()}</TableCell>
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
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />

    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading, userType, start_date, end_date) => dispatch(getPayments(pageNo, transaction_status, auth_id, loading, userType, start_date, end_date)),
    getPaymentsCount: (transaction_status, auth_id, userType, start_date, end_date) => dispatch(getPaymentsCount(transaction_status, auth_id, userType, start_date, end_date)),
    getPaymentsExport: (status, auth_id, userType, start_date, end_date) => dispatch(getPaymentsExport(status, auth_id, userType, start_date, end_date)),

  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsComponent);
