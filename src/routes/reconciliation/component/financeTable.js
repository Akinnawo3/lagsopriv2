import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {getTodayDate} from "Helpers/helpers";
import {getFinanceService, getFinanceTrip, getFinanceWallet} from "Actions/paymentAction";
import {Button} from "reactstrap";

const FinanceTable = ({getFinanceTrip, getFinanceService, getFinanceWallet, financeTrip, financeWallet, financeService, loading}) => {
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  useEffect(() => {
    getFinanceTrip('trip', dateType)
    getFinanceService('service', dateType)
    getFinanceWallet('wallet', dateType)

  }, []);




  const handleChange = (e) => {
    setDateType(e.target.value);
  };

  const handleSearch = () => {
    getFinanceTrip('trip', dateType, startDate, endDate)
    getFinanceService('service', dateType, startDate, endDate)
    getFinanceWallet('wallet', dateType, startDate, endDate)
  }



  const dateTypeFilter = [
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
  ];
  return (
    <div>
      <RctCollapsibleCard heading={"Finance Table"} fullBlock style={{minHeight: "70vh"}}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          {/* <small className="fw-bold">Date Type Filter</small> */}
          <select name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
            {dateTypeFilter.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">From</small>
          <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
            setStartDate(e.target.value)
          }} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {
            setEndDate(e.target.value)
          }} />
        </li>
        <Button onClick={() => handleSearch()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Apply filter</Button>
            <div className='row mt-3 p-2'>
              <div className='col-sm-4 align-items-start d-flex flex-column'>
                <div className='font-weight-bold mb-2'>Trip Payment</div>
                <div className="table-responsive" style={{minHeight: "50vh", border: '1px solid lightgrey'}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Successful</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeTrip.length > 0 && financeTrip.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  ₦{success?.balance?.toLocaleString()} ({success?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>{success.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                                <TableCell>{failure &&
                                <div>
                                  ₦{success?.failure?.toLocaleString()} ({failure?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>{failure?.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                              </TableRow>
                            </Fragment>
                          </TableBody>
                      )
                    })}
                  </Table>
                  {financeTrip.length === 0 && !loading && <div className='text-center mt-3'>No Data</div>}
                </div>
              </div>
              <div className='col-sm-4 align-items-start d-flex flex-column'>
                <div className='font-weight-bold  mb-2'>Service Payment</div>
                <div className="table-responsive" style={{minHeight: "50vh", border: '1px solid lightgrey'}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Successful</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeService.length > 0 && financeService.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item?.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  ₦{success?.balance?.toLocaleString()} ({success?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>{success.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                                <TableCell>{failure &&
                                <div>
                                  ₦{failure?.balance?.toLocaleString()} ({failure?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>{failure?.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                              </TableRow>
                            </Fragment>
                          </TableBody>
                      )
                    })}
                  </Table>
                  {financeService.length === 0 && !loading && <div className='text-center mt-3'>No Data</div>}
                </div>
              </div>
              <div className='col-sm-4 align-items-start d-flex flex-column'>
                <div className='font-weight-bold  mb-2'>Wallet Payment</div>
                <div className="table-responsive" style={{minHeight: "50vh", border: '1px solid lightgrey'}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Successful</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeWallet.length > 0 && financeWallet.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item?.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  ₦{success?.balance?.toLocaleString()} ({success?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-success font-weight-bold'>{success.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                                <TableCell>{failure &&
                                <div>
                                  ₦{failure?.balance?.toLocaleString()} ({failure?.total})
                                  {/*<div>*/}
                                  {/*  <div>Amount</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>*/}
                                  {/*</div>*/}
                                  {/*<div className='mt-2'>*/}
                                  {/*  <div>Count</div>*/}
                                  {/*  <div className='text-danger font-weight-bold'>{failure?.total}</div>*/}
                                  {/*</div>*/}
                                </div>
                                }</TableCell>
                              </TableRow>
                            </Fragment>
                          </TableBody>
                      )
                    })}
                  </Table>
                  {financeWallet.length === 0 && !loading && <div className='text-center mt-3'>No Data</div>}
                </div>
              </div>
            </div>
      </RctCollapsibleCard>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getFinanceTrip: (payment_type, date_type, start_date , end_date) => dispatch(getFinanceTrip(payment_type, date_type, start_date , end_date)),
    getFinanceService: (payment_type, date_type, start_date , end_date) => dispatch(getFinanceService(payment_type, date_type, start_date , end_date)),
    getFinanceWallet: (payment_type, date_type, start_date , end_date) => dispatch(getFinanceWallet(payment_type, date_type, start_date , end_date)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  financeWallet: state.payments.financeWallet,
  financeService: state.payments.financeService,
  financeTrip: state.payments.financeTrip,
});

export default connect(mapStateToProps, mapDispatchToProps)(FinanceTable);
