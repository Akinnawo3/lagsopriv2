import React, {Fragment, useEffect, useState} from "react";
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
  getFinanceHolderLogs,
  getFinanceHolderLogsCount,
  getFinanceHolderPayouts,
  getFinanceHolderPayoutsCount,
  searchFinanceHolderLogs,
  searchFinanceHolderPayouts,
  approvePayout,
  reviewPayout,
} from "Actions/paymentAction";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {Badge, Form, Input, Modal, ModalBody, ModalHeader} from "reactstrap";
import {calculatePostDate, getTodayDate} from "Helpers/helpers";
import {Button} from "reactstrap";
const qs = require("qs");
export let changeButtonShowed;

const DisbursementHolder = (props) => {
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
    approvePayout,
    reviewPayout,
  } = props;

  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [currentPage2, setCurrentPage2] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [receivable, setReceivable] = useState(true);
  const [type, setType] = useState("receivable");
  const [isIbileModal, setIsIbileModal] = useState(false);
  const [ibileData, setIbileData] = useState({});
  const [isZenoModal, setIsZenoModal] = useState(false);
  const [zenoData, setZenoData] = useState({});
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [showButton, setShowButton] = useState("");

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
    {value: 4, label: "Reviewed"},
  ];

  useEffect(() => {
    getFinanceDriverLogs(currentPage, true);
    getFinanceDriverLogsCount(true);
    getFinanceDriverPayouts(currentPage2, true);
    getFinanceDriverPayoutsCount(true);
  }, []);

  // const paginate = (pageNumber) => {
  //     history.push(`${history.location.pathname}?page=${pageNumber}`);
  //     setCurrentPage(pageNumber);
  //     getFinanceDriverLogs(pageNumber);
  //     window.scrollTo(0, 0);
  // };

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
  const makeReview = () =>
    reviewPayout({
      user_type: "driver",
      start_date: startDate,
      end_date: endDate,
    });
  const makeApproval = () =>
    approvePayout({
      // user_type: "stakeholder",
      // start_date: startDate,
      // end_date: endDate,
      status: "1",
    });

  changeButtonShowed = (button) => setShowButton(button);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Holders Disbursement"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Payment Overview" fullBlock>
          <ul className="d-flex align-items-end">
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <Input
                type="select"
                required
                style={{width: "120px"}}
                value={type}
                onChange={(e) => {
                  setDateType("daily");
                  setStartDate("");
                  setEndDate("");
                  setType(e.target.value);
                  if (e.target.value === "receivable") {
                    setReceivable(true);
                    getFinanceDriverLogs(currentPage, true);
                    getFinanceDriverLogsCount(true);
                  } else {
                    setReceivable(false);
                    getFinanceDriverPayouts(currentPage2, true);
                    getFinanceDriverPayoutsCount(true);
                    // getFinanceDriverPayouts(currentPage2, false, "", "", "", status);
                    // getFinanceDriverPayoutsCount(false, "", "", "", status);
                  }
                }}
              >
                <option value="receivable">Receivable</option>
                <option value="payouts">Payouts</option>
              </Input>
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
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2 ">
              <Button onClick={() => handleSearch()} style={{height: "30px"}} className="align-items-center justify-content-center" color="success">
                Apply filter
              </Button>
            </li>

            {/* <li className="list-inline-item search-icon d-inline-block ml-2 ">
              <Button onClick={() => handleSearch()} color="success">
                Apply filter
              </Button>
            </li> */}
            {/*<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">*/}
            {/*    <SearchComponent getPreviousData={type === 'receivable' ? getFinanceDriverLogs : getFinanceDriverPayouts} getSearchedData={type === 'receivable' ? searchFinanceDriverLogs : searchFinanceDriverPayouts} setCurrentPage={type === 'receivable' ? setCurrentPage : setCurrentPage2} getCount={type === 'receivable' ? getFinanceDriverLogsCount : getFinanceDriverPayoutsCount} placeHolder={'name, email'} />*/}
            {/*</li>*/}
          </ul>
          {receivable ? (
            <>
              {financeDriverLog?.length > 0 && (
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Ibile Balance</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Zeno Balance</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Fragment>
                        {financeDriverLog.map((item, key) => {
                          return (
                            <TableRow hover key={key}>
                              <TableCell>{item.group_date}</TableCell>
                              <TableCell>₦{item?.ibile_balance?.toLocaleString()}</TableCell>
                              <TableCell>
                                <button
                                  onClick={() => {
                                    setIbileData({...item?.ibile_data, ibile_balance: item?.ibile_balance, date: item.group_date});
                                    setIsIbileModal(true);
                                  }}
                                  type="button"
                                  className="rct-link-btn text-primary ml-3"
                                  title="view details"
                                >
                                  <i className="ti-eye" />
                                </button>
                              </TableCell>
                              <TableCell>₦{item?.zeno_balance?.toLocaleString()}</TableCell>
                              <TableCell>
                                <button
                                  onClick={() => {
                                    setZenoData({...item?.zeno_data, zeno_balance: item?.zeno_balance, date: item.group_date});
                                    setIsZenoModal(true);
                                  }}
                                  type="button"
                                  className="rct-link-btn text-primary ml-3"
                                  title="view details"
                                >
                                  <i className="ti-eye" />
                                </button>
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

              {/*{!loading && financeDriverLog?.length > 0 && (*/}
              {/*    <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">*/}
              {/*        <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={financeDriverLogCount?.total ? financeDriverLogCount?.total : 0} onChange={paginate} />*/}
              {/*    </div>*/}
              {/*)}*/}
            </>
          ) : (
            <>
              <div className="d-flex justify-content-end mr-2 mb-2">
                {showButton === "review" && (
                  <Button onClick={makeReview} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
                    Review Payout
                  </Button>
                )}
                {showButton === "approve" && (
                  <Button onClick={makeApproval} style={{height: "30px"}} className="align-items-center justify-content-center" color="primary">
                    Approve Payout
                  </Button>
                )}
              </div>
              {financeDriverPayouts?.length > 0 && (
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone No</TableCell>

                        <TableCell>Bank Name</TableCell>
                        <TableCell>Bank Acc. Number</TableCell>
                        <TableCell>Total Amount</TableCell>
                        <TableCell>Total Cash Collected</TableCell>
                        <TableCell>Actual Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <Fragment>
                        {financeDriverPayouts.map((item, key) => {
                          return (
                            <TableRow hover key={key}>
                              <TableCell>{item.group_date}</TableCell>
                              <TableCell>
                                {item?.user_data?.first_name} {item?.user_data?.last_name}
                              </TableCell>
                              <TableCell>{item?.user_data?.phone_number}</TableCell>
                              <TableCell>{item?.account_data?.bank_name}</TableCell>
                              <TableCell>{item?.account_data?.account_number}</TableCell>

                              <TableCell>₦{item?.payment_summary?.total_net_balance?.toLocaleString()}</TableCell>
                              <TableCell>₦{item?.payment_summary?.total_cash_collected?.toLocaleString()}</TableCell>
                              <TableCell>₦{item?.actual_amount?.toLocaleString()}</TableCell>
                              <TableCell>
                                <Badge color={item?.status === 0 ? "secondary" : item?.status === 1 ? "success" : item?.status === 2 ? "danger" : item?.status === 3 ? "warning" : "info"}>
                                  {item?.status === 0 ? "Pending" : item?.status === 1 ? "Completed" : item?.status === 2 ? "Failed" : item?.status === 3 ? "Processing" : "Reviewed"}
                                </Badge>
                              </TableCell>

                              {/* <TableCell>
                                <Badge color={item?.status === 1 ? "success" : "warning"}>{item?.status === 1 ? "Successful" : "Pending"}</Badge>
                              </TableCell> */}
                            </TableRow>
                          );
                        })}
                      </Fragment>
                    </TableBody>
                  </Table>
                </div>
              )}
              {financeDriverPayouts?.length < 1 && <EmptyData />}

              {/*{!loading && financeDriverPayouts?.length > 0 && (*/}
              {/*    <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">*/}
              {/*        <Pagination activePage={currentPage2} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={financeDriverPayoutsCount?.total ? financeDriverPayoutsCount?.total : 0} onChange={paginate} />*/}
              {/*    </div>*/}
              {/*)}*/}
            </>
          )}
        </RctCollapsibleCard>
      )}
      <Modal isOpen={isIbileModal} toggle={() => setIsIbileModal(!isIbileModal)}>
        <ModalHeader toggle={() => setIsIbileModal(!isIbileModal)}>Ibile Details</ModalHeader>
        <ModalBody>
          <div className="w-100" style={{fontSize: "0.8rem"}}>
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Date</strong>
                    </span>
                    {ibileData?.date}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Balance</strong>
                    </span>
                    ₦{ibileData?.ibile_balance?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Asset CO</strong>
                    </span>
                    ₦{ibileData?.asset_co?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Daily Tax</strong>
                    </span>
                    ₦{ibileData?.daily_tax?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Debt Service</strong>
                    </span>
                    ₦{ibileData?.debt_service?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Maintenance</strong>
                    </span>
                    ₦{ibileData?.maintenance?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Refleeting</strong>
                    </span>
                    ₦{ibileData?.refleeting?.toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={isZenoModal} toggle={() => setIsZenoModal(!isZenoModal)}>
        <ModalHeader toggle={() => setIsZenoModal(!isZenoModal)}>Zeno Details</ModalHeader>
        <ModalBody>
          <div className="w-100" style={{fontSize: "0.8rem"}}>
            <div className="tab-content px-4">
              <div className="tab-pane active" id="home">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Date</strong>
                    </span>
                    {zenoData?.date}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Balance</strong>
                    </span>
                    ₦{zenoData?.zeno_balance?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Comms</strong>
                    </span>
                    ₦{zenoData?.comms?.toLocaleString()}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Tech Co</strong>
                    </span>
                    ₦{zenoData?.tech_co?.toLocaleString()}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getFinanceDriverLogs: (page_no, loading, date_type, start_date, end_date) => dispatch(getFinanceHolderLogs(page_no, loading, date_type, start_date, end_date)),
    getFinanceDriverLogsCount: (loading, date_type, start_date, end_date) => dispatch(getFinanceHolderLogsCount(loading, date_type, start_date, end_date)),
    searchFinanceDriverLogs: (searchData) => dispatch(searchFinanceHolderLogs(searchData)),
    getFinanceDriverPayouts: (page_no, loading, date_type, start_date, end_date, status) => dispatch(getFinanceHolderPayouts(page_no, loading, date_type, start_date, end_date, status)),
    getFinanceDriverPayoutsCount: (loading, date_type, start_date, end_date, status) => dispatch(getFinanceHolderPayoutsCount(loading, date_type, start_date, end_date, status)),
    searchFinanceDriverPayouts: (searchData) => dispatch(searchFinanceHolderPayouts(searchData)),
    approvePayout: (data) => dispatch(approvePayout(data)),
    reviewPayout: (data) => dispatch(reviewPayout(data)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  financeDriverLog: state.payments.financeHolderLog,
  financeDriverLogCount: state.payments.financeHolderLogCount,
  financeDriverPayouts: state.payments.financeHolderPayouts,
  financeDriverPayoutsCount: state.payments.financeHolderPayoutsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisbursementHolder);
