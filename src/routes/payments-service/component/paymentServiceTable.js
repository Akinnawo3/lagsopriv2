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
import {Badge} from "reactstrap";
import {getPaymentsService} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import {CSVLink} from "react-csv";
import moment from "moment";

const PaymentServiceTable = ({payments, paymentsCount, auth_id, getPayments, header, loading}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [excelExport, setExcelExport] = useState([]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPayments(pageNumber, "", auth_id);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (payments.length > 0) {
      let result = payments.map((payment) => {
        return {
          Date_Time: moment(payment.createAt).format("MMMM Do YYYY, h:mm:ss a"),
          amount: payment.amount,
          description: payment.description,
          paymentID: payment.payment_id,
          paymentMethod: payment.payment_method,
          paymentType: payment.payment_type,
        };
      });
      setExcelExport(result);
    }
  }, [payments]);
  console.log(payments);

  [
    {
      user_type: "rider",
      first_name: "Increase",
      phone_number: "08111111112",
      last_name: "Lrtester",
      email: "increase.nkanta@zeno.no",
    },
  ];

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        <div className="float-right">
          {!loading && payments.length > 0 && (
            <CSVLink data={excelExport} filename={"drivers.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
              <i className="zmdi zmdi-download mr-2"></i>
              Export to Excel
            </CSVLink>
          )}
        </div>
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
    getPayments: (pageNo, transaction_status, auth_id) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  payments: state.payments.paymentsService,
  paymentsCount: state.payments.paymentsServiceCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentServiceTable);
