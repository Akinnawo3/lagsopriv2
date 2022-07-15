import React, {Fragment, useEffect, useState, useRef} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {
  getFinanceDriverLogs,
  getFinanceDriverLogsCount,
  getFinanceDriverPayouts,
  getFinanceDriverPayoutsCount,
  searchFinanceDriverLogs,
  searchFinanceDriverPayouts,
  getFinanceDriverPayoutExport,
  getFinanceDriverLogsExport,
  approvePayout,
} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {Badge, Button, Input} from "reactstrap";
import {getTodayDate} from "Helpers/helpers";
const qs = require("qs");
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const Disbursement = (props) => {
  const {
    history,
    loading,
    getFinanceDriverLogs,
    financeDriverLog,
    getFinanceDriverLogsCount,
    financeDriverLogCount,
    getFinanceDriverPayouts,
    financeDriverPayouts,
    getFinanceDriverPayoutsCount,
    financeDriverPayoutsCount,
    match,
    searchFinanceDriverLogs,
    searchFinanceDriverPayouts,
    getFinanceDriverLogsExport,
    getFinanceDriverPayoutExport,
    approvePayout,
  } = props;
  const exportRef = useRef(null);

  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [currentPage2, setCurrentPage2] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [receivable, setReceivable] = useState(true);
  const [type, setType] = useState("receivable");
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const dateTypeFilter = [
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
  ];
  const statusFilter = [
    {value: "", label: "All"},
    {value: 0, label: "Pending"},
    {value: 1, label: "Completed"},
    {value: 2, label: "Failed"},
    {value: 3, label: "Processing"},
  ];

  useEffect(() => {
    getFinanceDriverLogs(currentPage, true);
    getFinanceDriverLogsCount(true);
    getFinanceDriverPayouts(currentPage, true);
    getFinanceDriverPayoutsCount(true);
  }, []);

  const handleChange = (e) => {
    setDateType(e.target.value);
  };

  const handleSearch = () => {
    if (type === "receivable") {
      getFinanceDriverLogs(currentPage, false, dateType, startDate, endDate);
      getFinanceDriverLogsCount(false, dateType, startDate, endDate);
    } else {
      getFinanceDriverPayouts(currentPage2, false, dateType, startDate, endDate, status);
      getFinanceDriverPayoutsCount(false, dateType, startDate, endDate, status);
    }

    // getFinanceTrip('trip', dateType, startDate, endDate)
    // getFinanceService('service', dateType, startDate, endDate)
    // getFinanceWallet('wallet', dateType, startDate, endDate)
  };

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getFinanceDriverLogs(pageNumber, false, dateType, startDate, endDate);
    window.scrollTo(0, 0);
  };
  const paginat2 = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage2(pageNumber);
    getFinanceDriverPayouts(pageNumber, false, dateType, startDate, endDate, status);
    window.scrollTo(0, 0);
  };

  const handleExport = () => {
    exportRef.current.open();
  };
  const confirmExport = () => {
    exportRef.current.close();
    receivable ? getFinanceDriverLogsExport(dateType, startDate, endDate) : getFinanceDriverPayoutExport(startDate, endDate, status);
  };

  const makeApproval = () =>
    approvePayout({
      user_type: "driver",
      start_date: startDate,
      end_date: endDate,
    });

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Driver Disbursement"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Payment Overview" fullBlock>
          <ul className="d-flex align-items-end">
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <SearchComponent
                getPreviousData={type === "receivable" ? getFinanceDriverLogs : getFinanceDriverPayouts}
                getSearchedData={type === "receivable" ? searchFinanceDriverLogs : searchFinanceDriverPayouts}
                setCurrentPage={type === "receivable" ? setCurrentPage : setCurrentPage2}
                getCount={type === "receivable" ? getFinanceDriverLogsCount : getFinanceDriverPayoutsCount}
                placeHolder={"name, email"}
              />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <div className="mb-2 font-sm">Payment Type</div>
              <div>
                <Input
                  type="select"
                  required
                  style={{width: "120px"}}
                  value={type}
                  onChange={(e) => {
                    history.push(history.location.pathname);
                    setType(e.target.value);
                    setDateType("daily");
                    setStartDate("");
                    setEndDate("");
                    if (e.target.value === "receivable") {
                      setReceivable(true);

                      getFinanceDriverLogs(currentPage, true);
                      getFinanceDriverLogsCount(true);
                    } else {
                      setReceivable(false);
                      getFinanceDriverPayouts(currentPage, true);
                      getFinanceDriverPayoutsCount(true);
                    }
                  }}
                >
                  <option value="receivable">Receivable</option>
                  <option value="payouts">Payouts</option>
                </Input>
              </div>
            </li>
            {receivable ? (
              <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                <div className="mb-2 font-sm">Date Type</div>
                {/* <small className="fw-bold">Date Type Filter</small> */}
                <select name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
                  {dateTypeFilter.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </li>
            ) : (
              <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                <div className="mb-2 font-sm">Status</div>
                {/* <small className="fw-bold">Date Type Filter</small> */}
                <select name="fiter-dropdown" onChange={(e) => setStatus(e.target.value)} className="p-1 px-4">
                  {statusFilter.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </li>
            )}

            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <div className="mb-2 font-sm">Start Date</div>
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue={startDate}
                min="2018-01-01"
                max={getTodayDate()}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <div className="mb-2 font-sm">End Date</div>
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue={endDate}
                min="2018-01-01"
                max={getTodayDate()}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <Button onClick={() => handleSearch()} color="success">
                Apply filter
              </Button>
            </li>
          </ul>
          {receivable ? (
            <div className="float-right">
              {financeDriverLog?.length > 0 && (
                <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
                  {" "}
                  <i className="zmdi zmdi-download mr-2"></i> Export to Excel
                </Button>
              )}
            </div>
          ) : (
            <div className="float-right">
              {financeDriverPayouts?.length > 0 && (
                <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
                  <i className="zmdi zmdi-download mr-2"></i> Export to Excel
                </Button>
              )}
            </div>
          )}
          {receivable ? (
            <>
              {financeDriverLog?.length > 0 && (
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Name</TableCell>
                        <TableCell>Earning</TableCell>
                        <TableCell>Phone No</TableCell>
                        <TableCell>Successful Payments</TableCell>
                        <TableCell>Failed Payments</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Fragment>
                        {financeDriverLog.length > 0 &&
                          financeDriverLog.map((item, key) => {
                            let success = item.trip_data[item.trip_data.findIndex((x) => x.status === 1)];
                            let failure = item.trip_data[item.trip_data.findIndex((x) => x.status === 2)];
                            return (
                              <TableRow hover key={key}>
                                <TableCell>
                                  <Link to={`/admin/drivers/${item._id}`}>{item.first_name + "  " + item.last_name}</Link>
                                </TableCell>
                                <TableCell>₦{item?.earning?.toLocaleString()}</TableCell>
                                <TableCell>{item.phone_number}</TableCell>
                                <TableCell>
                                  {success && (
                                    <div>
                                      ₦{success?.amount?.toLocaleString()} ({success.total})
                                    </div>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {failure && (
                                    <div>
                                      ₦{failure?.amount?.toLocaleString()} ({failure.total})
                                    </div>
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                      </Fragment>
                    </TableBody>
                  </Table>
                </div>
              )}
              {financeDriverLog?.length < 1 && <EmptyData />}

              {!loading && financeDriverLog?.length > 0 && (
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                  <Pagination
                    activePage={currentPage}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={20}
                    totalItemsCount={financeDriverLogCount?.total ? financeDriverLogCount?.total : 0}
                    onChange={paginate}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className="d-flex justify-content-end mr-2 mb-2">
                <Button onClick={makeApproval} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
                  Approve Payout
                </Button>
              </div>
              {financeDriverPayouts?.length > 0 && (
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Bank Name</TableCell>
                        <TableCell>Total Cash Collected</TableCell>
                        <TableCell>Actual Amount</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Phone No</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Fragment>
                        {financeDriverPayouts.length > 0 &&
                          financeDriverPayouts.map((item, key) => {
                            return (
                              <TableRow hover key={key}>
                                <TableCell>{item.group_date}</TableCell>
                                <TableCell>
                                  {item?.user_data?.first_name} {item?.user_data?.last_name}
                                </TableCell>
                                <TableCell>{item.account_data.account_name}</TableCell>
                                {/* <TableCell>{item.account_data.bank_name}</TableCell> */}
                                <TableCell>₦{item?.payment_summary?.total_cash_collected?.toLocaleString()}</TableCell>
                                <TableCell>₦{item?.actual_amount?.toLocaleString()}</TableCell>
                                <TableCell>₦{item?.payment_summary?.total_net_balance?.toLocaleString()}</TableCell>
                                <TableCell>{item?.user_data?.phone_number}</TableCell>
                                <TableCell>
                                  <Badge color={item?.status === 0 ? "secondary" : item?.status === 1 ? "success" : item?.status === 2 ? "danger" : "warning"}>
                                    {item?.status === 0 ? "Pending" : item?.status === 1 ? "Completed" : item?.status === 2 ? "Failed" : "Processing"}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                      </Fragment>
                    </TableBody>
                  </Table>
                </div>
              )}
              {financeDriverPayouts?.length < 1 && <EmptyData />}

              {!loading && financeDriverPayouts?.length > 0 && (
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                  <Pagination
                    activePage={currentPage2}
                    itemClass="page-item"
                    linkClass="page-link"
                    itemsCountPerPage={20}
                    totalItemsCount={financeDriverPayoutsCount?.total ? financeDriverPayoutsCount?.total : 0}
                    onChange={paginat2}
                  />
                </div>
              )}
            </>
          )}
        </RctCollapsibleCard>
      )}
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getFinanceDriverLogs: (page_no, loading, date_type, start_date, end_date) => dispatch(getFinanceDriverLogs(page_no, loading, date_type, start_date, end_date)),
    getFinanceDriverLogsCount: (loading, date_type, start_date, end_date) => dispatch(getFinanceDriverLogsCount(loading, date_type, start_date, end_date)),
    searchFinanceDriverLogs: (searchData) => dispatch(searchFinanceDriverLogs(searchData)),
    getFinanceDriverPayouts: (page_no, loading, date_type, start_date, end_date, status) => dispatch(getFinanceDriverPayouts(page_no, loading, date_type, start_date, end_date, status)),
    getFinanceDriverPayoutsCount: (loading, date_type, start_date, end_date, status) => dispatch(getFinanceDriverPayoutsCount(loading, date_type, start_date, end_date, status)),
    searchFinanceDriverPayouts: (searchData) => dispatch(searchFinanceDriverPayouts(searchData)),
    getFinanceDriverLogsExport: (date_type, start_date, end_date) => dispatch(getFinanceDriverLogsExport(date_type, start_date, end_date)),
    getFinanceDriverPayoutExport: (start_date, end_date, status) => dispatch(getFinanceDriverPayoutExport(start_date, end_date, status)),
    approvePayout: (data) => dispatch(approvePayout(data)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  financeDriverLog: state.payments.financeDriverLog,
  financeDriverLogCount: state.payments.financeDriverLogCount,
  financeDriverPayouts: state.payments.financeDriverPayouts,
  financeDriverPayoutsCount: state.payments.financeDriverPayoutsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Disbursement);
