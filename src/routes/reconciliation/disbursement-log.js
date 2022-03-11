import React, {Fragment, useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {calculatePostDate} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {getFinanceDriverLogs, getFinanceDriverLogsCount} from "Actions/paymentAction";
import {Link} from "react-router-dom";
const qs = require("qs");

const DisbursementLog = ({history, loading, getFinanceDriverLogs, financeDriverLog, getFinanceDriverLogsCount, financeDriverLogCount, match}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    // if (pageFromQuery === undefined || AdminActivityLog.length < 1) {
    getFinanceDriverLogs(currentPage, true);
    getFinanceDriverLogsCount(true);
    // }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getFinanceDriverLogs(pageNumber);
    window.scrollTo(0, 0);
  };

  console.log(financeDriverLog, 'qqqqq')


  return (
      <div className="table-wrapper">
        <PageTitleBar title={"Drivers Disbursement Log"} match={match} />
        {!loading && (
            <RctCollapsibleCard heading="Activity Log" fullBlock>
              {financeDriverLog?.length > 0 && (
                  <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                      <TableHead>
                        <TableRow hover>
                          <TableCell>Name</TableCell>
                          <TableCell>Earning</TableCell>
                          <TableCell>Phone No</TableCell>
                          <TableCell>Successful Trips</TableCell>
                          <TableCell>Pending Trips</TableCell>
                          <TableCell>Failed Trips</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          {financeDriverLog.map((item, key) => {
                            let success = item.trip_data[item.trip_data.findIndex(x => x.status ===1)]
                            let pending = item.trip_data[item.trip_data.findIndex(x => x.status ===0)]
                            let failure = item.trip_data[item.trip_data.findIndex(x => x.status ===2)]
                            return (
                                <TableRow hover key={key}>
                                  <TableCell>
                                    <Link to={`/admin/drivers/${item._id}`}>
                                      {item.first_name + "  " + item.last_name}
                                    </Link>
                                  </TableCell>
                                  <TableCell>₦{item.earning.toLocaleString()}</TableCell>
                                  <TableCell>{item.phone_number}</TableCell>
                                  <TableCell>{success &&
                                  <div>
                                    <div>
                                      <div>Amount</div>
                                      <div className='text-success font-weight-bold'>₦{success.amount.toLocaleString()}</div>
                                    </div>
                                    <div className='mt-2'>
                                      <div>Count</div>
                                      <div className='text-success font-weight-bold'>{success.total}</div>
                                    </div>
                                  </div>
                                  }</TableCell>
                                  <TableCell>{pending &&
                                  <div>
                                    <div>
                                      <div>Amount</div>
                                      <div className='text-warning font-weight-bold'>₦{pending?.amount.toLocaleString()}</div>
                                    </div>
                                    <div className='mt-2'>
                                      <div>Count</div>
                                      <div className='text-warning font-weight-bold'>{pending?.total}</div>
                                    </div>
                                  </div>
                                  }</TableCell>
                                  <TableCell>{failure &&
                                  <div>
                                    <div>
                                      <div>Amount</div>
                                      <div className='text-danger font-weight-bold'>₦{failure?.amount.toLocaleString()}</div>
                                    </div>
                                    <div className='mt-2'>
                                      <div>Count</div>
                                      <div className='text-danger font-weight-bold'>{failure?.total}</div>
                                    </div>
                                  </div>
                                  }</TableCell>
                                </TableRow>
                            )
                          })}
                        </Fragment>
                      </TableBody>
                    </Table>
                  </div>
              )}
              {financeDriverLog?.length < 1 && <EmptyData />}

              {!loading && financeDriverLog?.length > 0 && (
                  <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={financeDriverLogCount?.total} onChange={paginate} />
                  </div>
              )}
            </RctCollapsibleCard>
        )}
      </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getFinanceDriverLogs: (page_no, loading) => dispatch(getFinanceDriverLogs(page_no, loading)),
    getFinanceDriverLogsCount: (loading) => dispatch(getFinanceDriverLogsCount(loading)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  financeDriverLog: state.payments.financeDriverLog,
  financeDriverLogCount: state.payments.financeDriverLogCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisbursementLog);
