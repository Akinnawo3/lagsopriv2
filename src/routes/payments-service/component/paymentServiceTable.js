import React, {Fragment, useState, useEffect} from "react";
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
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import {getPaymentsService, getPaymentsServiceCount} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import {CSVLink} from "react-csv";
import moment from "moment";
import {useHistory} from "react-router-dom";
const qs = require("qs");

const PaymentServiceTable = ({payments, status, paymentsCount, auth_id, getPayments, header, loading, getPaymentsServiceCount}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [excelExport, setExcelExport] = useState([]);
  const [paymentOptionType, setPaymentOptionType] = useState("");

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPayments(pageNumber, status, auth_id, false, paymentOptionType);
    window.scrollTo(0, 0);
  };

  const paymentTypeOptions = [
    {value: "", label: "- - Filter by Payment Type - -"},
    {label: "Driver Asset", value: "driver-assets"},
    {label: "Add Card", value: "add-card"},
    {label: "Driver Verification", value: "driver-verification"},
  ];

  const handleChange = (e) => {
    setPaymentOptionType(e.target.value);
  };

  useEffect(() => {
    if (payments.length > 0) {
      let result = payments.map((payment) => {
        return {
          Date_Time: moment(payment.createdAt).format("MMMM Do YYYY, h:mm:ss"),
          amount: payment.amount,
          description: payment.description,
          paymentID: payment.payment_id,
          paymentMethod: payment.payment_method,
          paymentType: payment.payment_type,
          UserName: `${payment?.user_data[0]?.first_name} ${payment?.user_data[0]?.last_name}`,
          UserPhoneNumber: payment.user_data[0]?.phone_number,
          UserEMail: payment.user_data[0]?.email,
        };
      });
      setExcelExport(result);
    }
  }, [payments]);

  // [
  //   {
  //     user_type: "rider",
  //     first_name: "Increase",
  //     phone_number: "08111111112",
  //     last_name: "Lrtester",
  //     email: "increase.nkanta@zeno.no",
  //   },
  // ];

  const applyFilter = () => {
    getPayments(currentPage, status, auth_id, false, paymentOptionType);
    getPaymentsServiceCount(status, auth_id, paymentOptionType);
  };

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
            {paymentTypeOptions.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <button className="btn btn-primary" onClick={applyFilter}>
            Apply Filter
          </button>
        </li>
        <div className="float-right">
          {!loading && payments.length > 0 && (
            <CSVLink data={excelExport} filename={"drivers.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
              <i className="zmdi zmdi-download mr-2"></i>
              Export to Excel
            </CSVLink>
          )}
        </div>

        <Row className="mb-2">
          <Col xs="12" sm="6" lg="3">
            <Card className="text-success bg-light p-3">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Total Count</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{height: "70px"}}>
                <span className=" font-xl" style={{fontSize: "2.5rem"}}>
                  {paymentsCount}
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-success bg-light p-3">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Total Balance</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{height: "70px"}}>
                <span className=" font-xl" style={{fontSize: "2.5rem"}}>
                  "SDfg"
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
        </Row>

        {!loading && payments?.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date / Time</TableCell>
                    <TableCell>Payment Method</TableCell>
                    <TableCell>Payment Type</TableCell>
                    <TableCell>Acual Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>User Phn No.</TableCell>
                    <TableCell> User Email</TableCell>
                    <TableCell>User Type</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {payments.map((user, key) => (
                      <TableRow hover key={key}>
                        <TableCell>₦{user.amount.toLocaleString()}</TableCell>
                        <TableCell>{calculatePostDate(user.createdAt)}</TableCell>
                        <TableCell>{user.payment_method}</TableCell>
                        <TableCell>{user.payment_type}</TableCell>
                        <TableCell>₦{user?.actual_amount?.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge color={getStatusColor4(user.status)}>{getStatus4(user.status)} </Badge>
                        </TableCell>

                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.first_name} ${user?.user_data[0]?.last_name}` : ""}</TableCell>
                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.phone_number}` : ""}</TableCell>
                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.email}` : ""}</TableCell>
                        <TableCell>{user?.user_data.length ? `${user?.user_data[0]?.user_type}` : ""}</TableCell>

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
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPayments: (pageNo, transaction_status, auth_id, loading, payment_type) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id, loading, payment_type)),
    getPaymentsServiceCount: (transaction_status, auth_id, payment_type) => dispatch(getPaymentsServiceCount(transaction_status, auth_id, payment_type)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  payments: state.payments.paymentsService,
  paymentsCount: state.payments.paymentsServiceCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentServiceTable);
