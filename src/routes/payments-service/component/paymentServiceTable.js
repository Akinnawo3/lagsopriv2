import React, { Fragment, useState, useEffect, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import { calculatePostDate, getStatus4, getStatus5, getStatusColor4, getStatusColor5 } from "Helpers/helpers";
import { Badge, Button, Card, CardBody, Col, Row } from "reactstrap";
import { getPaymentsService, getPaymentsServiceCount, getPaymentsServiceBalance, getPaymentsServiceExport } from "Actions/paymentAction";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import moment from "moment";
import { useHistory } from "react-router-dom";
const qs = require("qs");
import { getFirstDayOfMonth, getTodayDate } from "../../../helpers/helpers";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const PaymentServiceTable = ({
  payments,
  status,
  paymentsCount,
  auth_id,
  getPayments,
  header,
  loading,
  getPaymentsServiceCount,
  paymentsServiceBalance,
  getPaymentsServiceBalance,
  getPaymentsServiceExport,
}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [excelExport, setExcelExport] = useState([]);
  const [paymentOptionType, setPaymentOptionType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPayments(pageNumber, status, auth_id, false, paymentOptionType, startDate, endDate);
    window.scrollTo(0, 0);
  };

  const paymentTypeOptions = [
    { value: "", label: "- - Filter by Payment Type - -" },
    { label: "Driver Asset", value: "driver-assets" },
    // {label: "Add Card", value: "add-card"},
    { label: "Driver Verification", value: "driver-verification" },
  ];

  const handleChange = (e) => {
    setPaymentOptionType(e.target.value);
  };

  useEffect(() => {
    if (payments.length > 0) {
      let result = payments.map((payment) => {
        return {
          status: payment.status,
          Date_Time: moment(payment.createdAt).format("MMMM Do YYYY, h:mm:ss"),
          amount: payment.amount,
          description: payment.description,
          paymentID: payment.payment_id,
          paymentMethod: payment.payment_method,
          paymentType: payment.payment_type,
          UserName: `${payment?.user_data[0]?.first_name} ${payment?.user_data[0]?.last_name}`,
          UserPhoneNumber: payment.user_data[0]?.phone_number,
          UserEMail: payment.user_data[0]?.email,
          UserAddress: `${payment?.user_data[0]?.home_address}`,
        };
      });
      setExcelExport(result);
    }
  }, [payments]);

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
    getPayments(1, status, auth_id, false, paymentOptionType, startDate, endDate);
    getPaymentsServiceCount(status, auth_id, paymentOptionType, startDate, endDate);
    getPaymentsServiceBalance(status, auth_id, paymentOptionType, startDate, endDate);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getPaymentsServiceExport(status, auth_id, paymentOptionType, startDate, endDate);
  };

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{ minHeight: "70vh" }}>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
            {paymentTypeOptions.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">From</small>
          <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <button className="btn btn-primary mr-2" style={{ height: "30px" }}>
            Apply Filter
          </button>
        </li>
        <div className="float-right">
          <a className="mr-2" target="_blank" href="https://docs.google.com/spreadsheets/d/157zYlbU_y_AciM2piJzcoZVfKX38_cTXICcBvhq9RoY/edit?usp=sharing">
            <button className="btn btn-primary" style={{ height: "30px" }}>
              View Breakdown
            </button>
          </a>

          {!loading && payments.length > 0 && (
            <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>

        <Row className="mb-2">
          <Col xs="12" sm="6">
            <Card className="text-success bg-light p-3">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Total Count</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{ height: "70px" }}>
                <span className=" font-xl" style={{ fontSize: "2.5rem" }}>
                  {paymentsCount}
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card className="text-success bg-light p-3">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Total Balance</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{ height: "70px" }}>
                <span className=" font-xl" style={{ fontSize: "2.5rem" }}>
                  ???{paymentsServiceBalance?.toLocaleString()}
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
        </Row>

        {!loading && payments?.length > 0 && (
          <div>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date / Time</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Payment Type</TableCell>
                    <TableCell>Actual Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>User Phn No.</TableCell>
                    <TableCell> User Email</TableCell>
                    {/* <TableCell>User Type</TableCell> */}
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {payments.map((user, key) => (
                      <TableRow hover key={key}>
                        <TableCell>???{user.amount.toLocaleString()}</TableCell>
                        <TableCell>{calculatePostDate(user.createdAt)}</TableCell>
                        <TableCell>{user.payment_method}</TableCell>
                        <TableCell>{user.payment_type}</TableCell>
                        <TableCell>???{user?.actual_amount?.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge color={getStatusColor5(user.status)}>{getStatus5(user.status)} </Badge>
                        </TableCell>

                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.first_name} ${user?.user_data[0]?.last_name}` : ""}</TableCell>
                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.phone_number}` : ""}</TableCell>
                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.email}` : ""}</TableCell>
                        {/* <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.user_type}` : ""}</TableCell> */}

                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/payments-service/${user.payment_id}`}>
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
    getPayments: (pageNo, transaction_status, auth_id, loading, payment_type, start_date, end_date) =>
      dispatch(getPaymentsService(pageNo, transaction_status, auth_id, loading, payment_type, start_date, end_date)),
    getPaymentsServiceCount: (transaction_status, auth_id, payment_type, start_date, end_date) => dispatch(getPaymentsServiceCount(transaction_status, auth_id, payment_type, start_date, end_date)),
    getPaymentsServiceExport: (transaction_status, auth_id, payment_type, start_date, end_date) => dispatch(getPaymentsServiceExport(transaction_status, auth_id, payment_type, start_date, end_date)),
    getPaymentsServiceBalance: (transaction_status, auth_id, payment_type, start_date, end_date) =>
      dispatch(getPaymentsServiceBalance(transaction_status, auth_id, payment_type, start_date, end_date)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  payments: state.payments.paymentsService,
  paymentsCount: state.payments.paymentsServiceCount,
  paymentsServiceBalance: state.payments.paymentsServiceBalance,
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentServiceTable);
