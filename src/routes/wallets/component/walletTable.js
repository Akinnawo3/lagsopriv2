/**
 * TripsTable
 */
import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {getWallets, getWalletsCount, getFundingBalance} from "Actions/walletAction";
import {Media, Badge, Card, CardBody, Col, Row} from "reactstrap";
import moment from "moment";
import {useHistory} from "react-router-dom";
const qs = require("qs");
import {getFirstDayOfMonth, getTodayDate} from "../../../helpers/helpers";

const WalletTable = ({status, wallets, getWallets, getWalletsCount, getFundingBalance, isLoading, walletsCount, fundingBalance}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  // const [excelExport, setExcelExport] = useState([]);
  const [transactionOptionType, setTransactionOptionType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getWallets(pageNumber, status, "", false, transactionOptionType);
    window.scrollTo(0, 0);
  };

  console.log(walletsCount);
  const transactionTypeOptions = [
    {value: "", label: "- - Filter by Transaction Type - -"},
    {label: "Funding From Paystack", value: "fund"},
    {label: "Debt-service Net Possion", value: "driver-commission"},
    {label: "Wallet Transfer", value: "share"},
  ];
  const handleChange = (e) => {
    setTransactionOptionType(e.target.value);
  };

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
    getWallets(1, status, "", true, transactionOptionType, startDate, endDate);
    getWalletsCount(status, "", true, transactionOptionType, startDate, endDate);
    getFundingBalance("", status, transactionOptionType, startDate, endDate);
  };

  return (
    <div>
      <RctCollapsibleCard heading="All Trips" fullBlock>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
            {transactionTypeOptions.map((item) => (
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
          <button className="btn btn-primary" onClick={applyFilter}>
            Apply Filter
          </button>
        </li>
        {/* <div className="float-right">
        {!loading && payments.length > 0 && (
          <CSVLink data={excelExport} filename={"drivers.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
            <i className="zmdi zmdi-download mr-2"></i>
            Export to Excel
          </CSVLink>
        )}
      </div> */}
        <Row className="mb-2">
          <Col xs="12" sm="6">
            <Card className="text-success bg-light p-3">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Funding Balance</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{height: "70px"}}>
                <span className=" font-xl" style={{fontSize: "2.5rem"}}>
                  ₦{fundingBalance?.toLocaleString()}
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
        </Row>
        {!isLoading && wallets.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell> Id</TableCell>
                    <TableCell>Date/Time</TableCell>
                    <TableCell>Transaction Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Recipient</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {wallets.length > 0 &&
                      wallets.map((trip) => (
                        <TableRow hover key={trip._id}>
                          <TableCell>
                            <Media>
                              <Media body>
                                <h5 className="m-0 pt-15">{trip._id}</h5>
                              </Media>
                            </Media>
                          </TableCell>
                          <TableCell>
                            {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
                          </TableCell>
                          <TableCell>{trip.transaction_type}</TableCell>
                          <TableCell> ₦{trip?.amount?.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge color={trip.status === 1 ? "success" : trip.status === 0 ? "secondary" : trip.status === 2 ? "danger" : "info"}>
                              {trip.status === 1 ? "Complete" : trip.status === 0 ? "Pending" : trip.status === 2 ? "Cancelled" : "Debit "}
                            </Badge>
                          </TableCell>
                          <TableCell>{trip.description}</TableCell>
                          <TableCell>{trip.recipient}</TableCell>
                          <TableCell>
                            <button type="button" className="rct-link-btn text-primary" title="view details">
                              <Link to={`/admin/wallets/${trip._id}`}>
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
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={walletsCount} onChange={paginate} />
            </div>
          </div>
        )}
        {wallets.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getWallets: (page_no, status, auth_id, spinner, transaction_type, start_date, end_date) => dispatch(getWallets(page_no, status, auth_id, spinner, transaction_type, start_date, end_date)),
    getWalletsCount: (status, auth_id, loading, transaction_type, start_date, end_date) => dispatch(getWalletsCount(status, auth_id, loading, transaction_type, start_date, end_date)),
    getFundingBalance: (auth_id, status, transaction_type, start_date, end_date) => dispatch(getFundingBalance(auth_id, status, transaction_type, start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  wallets: state.wallets.wallets,
  walletsCount: state.wallets.walletsCount,
  fundingBalance: state.wallets.fundingBalance,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
