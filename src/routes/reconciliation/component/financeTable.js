import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {getFirstDayOfMonth, getStatus4, getStatusColor4, getTodayDate} from "Helpers/helpers";
import {getFinance} from "Actions/paymentAction";
import {Badge, Button} from "reactstrap";
import {Icon} from "@material-ui/core";

const FinanceTable = ({getFinance, financeTrip, financeWallet, financeService, loading}) => {
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getTodayDate());


  useEffect(() => {
    getFinance('trip', dateType)
    getFinance('service', dateType)
    getFinance('wallet', dateType)

  }, [dateType]);




  const handleChange = (e) => {
    setDateType(e.target.value);
  };

  const handleSearch = () => {
    getFinance('trip', 'daily', startDate, endDate)
    getFinance('service', 'daily', startDate, endDate)
    getFinance('wallet', 'daily', startDate, endDate)
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
        <Button onClick={() => handleSearch()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Search</Button>
            <div className='row mt-3 p-2'>
              <div className='col-sm-4 align-items-start d-flex flex-column'>
                <div className='font-weight-bold mb-2'>Trip Payment</div>
                <div className="table-responsive" style={{minHeight: "50vh", border: '1px solid lightgrey'}}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell>Date</TableCell>
                        <TableCell>Successful</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeTrip.length > 0 && financeService.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let pending = item.data[item.data.findIndex(x => x.status ===0)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  <div>
                                    <div>Amount</div>
                                    <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>
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
                                    <div className='text-warning font-weight-bold'>₦{pending?.balance.toLocaleString()}</div>
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
                                    <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>
                                  </div>
                                  <div className='mt-2'>
                                    <div>Count</div>
                                    <div className='text-danger font-weight-bold'>{failure?.total}</div>
                                  </div>
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
                        <TableCell>Pending</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeService.length > 0 && financeService.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let pending = item.data[item.data.findIndex(x => x.status ===0)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  <div>
                                    <div>Amount</div>
                                    <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>
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
                                    <div className='text-warning font-weight-bold'>₦{pending?.balance.toLocaleString()}</div>
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
                                    <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>
                                  </div>
                                  <div className='mt-2'>
                                    <div>Count</div>
                                    <div className='text-danger font-weight-bold'>{failure?.total}</div>
                                  </div>
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
                        <TableCell>Pending</TableCell>
                        <TableCell>Failed</TableCell>
                      </TableRow>
                    </TableHead>
                    {financeWallet.length > 0 && financeService.map((item, index) =>  {
                      let success = item.data[item.data.findIndex(x => x.status ===1)]
                      let pending = item.data[item.data.findIndex(x => x.status ===0)]
                      let failure = item.data[item.data.findIndex(x => x.status ===2)]
                      return (
                          <TableBody key={index}>
                            <Fragment>
                              <TableRow hover>
                                <TableCell>{item.group_date}</TableCell>
                                <TableCell>{success &&
                                <div>
                                  <div>
                                    <div>Amount</div>
                                    <div className='text-success font-weight-bold'>₦{success.balance.toLocaleString()}</div>
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
                                    <div className='text-warning font-weight-bold'>₦{pending?.balance.toLocaleString()}</div>
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
                                    <div className='text-danger font-weight-bold'>₦{failure?.balance.toLocaleString()}</div>
                                  </div>
                                  <div className='mt-2'>
                                    <div>Count</div>
                                    <div className='text-danger font-weight-bold'>{failure?.total}</div>
                                  </div>
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
    getFinance: (payment_type, date_type, start_date , end_date) => dispatch(getFinance(payment_type, date_type, start_date , end_date)),
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
