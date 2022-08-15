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
import {calculatePostDate, getStatus4, getStatusColor4, getTodayDate} from "Helpers/helpers";
import {Badge, Button} from "reactstrap";
import {getPayments, getPaymentsCount, getPaymentsExport, searchPayment} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";
const qs = require("qs");
const PaymentTable = ({payments, status, paymentsCount, auth_id, getPayments, header, loading, getPaymentsExport, getPaymentsCount, searchPayment}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const exportRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPayments(pageNumber, status, auth_id);
    window.scrollTo(0, 0);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getPaymentsExport(status, '', '', startDate, endDate);
  };

  const handleGetPreviousData = () => {
    getPayments(currentPage, status, auth_id);
  };

  const handleGetCount = () => {
    getPaymentsCount(status, auth_id);
  };

  const handleGetSearch = (data) => {
    searchPayment(data, status);
  };

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
   getPayments(1, status, auth_id, false, 'rider_id', startDate, endDate);
   getPaymentsCount(status, auth_id, 'rider_id', startDate, endDate)
  };

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}} item={payments} currentPage={currentPage} totalCount={paymentsCount}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <SearchComponent
            getPreviousData={handleGetPreviousData}
            getSearchedData={handleGetSearch}
            setCurrentPage={setCurrentPage}
            getCount={handleGetCount}
            placeHolder={"email, phone, trip reference"}
          />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">From</small>
          <input type="date" id="start" name="wallet-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input type="date" id="start" name="wallet-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <button className="btn btn-primary" onClick={applyFilter}>
            Apply Filter
          </button>
        </li>
        <div className="float-right">
          {!loading && payments.length > 0 && (
            <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
              {" "}
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>
        {!loading && payments?.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    {/*<TableCell>Payment Id</TableCell>*/}
                    <TableCell>Trip Reference</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Actual Amount</TableCell>
                    <TableCell>Promo</TableCell>
                    <TableCell>Rider Name</TableCell>
                    <TableCell>Date / Time</TableCell>
                    <TableCell>Charge Date</TableCell>
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
                        {/*<TableCell>{item.payment_id}</TableCell>*/}
                        <TableCell>{item.trip_ref}</TableCell>
                        <TableCell>₦{item?.amount?.toLocaleString()}</TableCell>
                        <TableCell>₦{item.actual_amount?.toLocaleString()}</TableCell>
                        <TableCell>
                          {item?.fare_param?.promo_discount} ({item?.fare_param?.promo_value})
                        </TableCell>
                        <TableCell>{`${item?.first_name ? item?.first_name : ""} ${item?.last_name ? item?.last_name : ""}`}</TableCell>
                        <TableCell>{calculatePostDate(item.createdAt)}</TableCell>
                        <TableCell>{calculatePostDate(item?.charge_at)}</TableCell>
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
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading, userType, start_date, end_date) => dispatch(getPayments(pageNo, transaction_status, auth_id, loading, userType, start_date, end_date)),
    getPaymentsExport: (status, auth_id, userType, start_date, end_date) => dispatch(getPaymentsExport(status, auth_id, userType, start_date, end_date)),
    getPaymentsCount: (transaction_status, auth_id, userType, start_date, end_date) => dispatch(getPaymentsCount(transaction_status, auth_id, userType, start_date, end_date)),
    searchPayment: (searchData, status) => dispatch(searchPayment(searchData, status)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  payments: state.payments.payments,
  paymentsCount: state.payments.paymentsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentTable);
