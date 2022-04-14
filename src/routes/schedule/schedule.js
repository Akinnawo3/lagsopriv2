/**
 * Schedule
 */
import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {exportSchedule, getFdtCount, getSchedule, getScheduleCount} from "Actions/fdtActions";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {Badge, Button} from "reactstrap";
import {getTodayDate} from "Helpers/helpers";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
const qs = require("qs");

const Schedule = ({history, match, getSchedule, schedule, loading, getScheduleCount, scheduleCount, exportSchedule}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const exportRef = useRef(null);
  useEffect(() => {
    if (pageFromQuery === undefined || schedule.length < 1) {
      getSchedule(currentPage, true);
      getScheduleCount();
    }
  }, []);

  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    await setCurrentPage(pageNumber);
    await window.scrollTo(0, 0);
    getSchedule(pageNumber);
  };

  const handleFilter = () => {
    getSchedule(1, false, startDate, endDate)
    getScheduleCount(startDate, endDate)
  }

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    exportSchedule(startDate, endDate)
  }

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Schedules"} match={match} />
      <RctCollapsibleCard heading={"Schedules"} fullBlock style={{minHeight: "70vh"}}>
        <div className='ml-2'>
          <li className="list-inline-item search-icon d-inline-block mb-2">
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
          <Button onClick={() => handleFilter()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Apply filter</Button>

          <div className="float-right">
            <Button onClick={() => handleExport()} style={{height: '30px'}} className='align-items-center justify-content-center mr-2' color='primary'> <i className="zmdi zmdi-download mr-2"></i>  Export to Excel</Button>
          </div>
        </div>
        {schedule.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              {!loading && (
                <Table>
                  <TableHead>
                    <TableRow hover>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Date / Time</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Fragment>
                      {schedule.length > 0 &&
                        schedule.map((record, key) => (
                          <TableRow hover key={key}>
                            <TableCell>{record.users?.first_name}</TableCell>
                            <TableCell>{record.users?.last_name}</TableCell>
                            <TableCell>
                              {new Date(record.ride_data[0]?.ride_date).toDateString()} {record.ride_data[0]?.ride_time}
                            </TableCell>
                            <TableCell>
                              <Badge color={record?.ride_status === 1 ? "success" : record?.ride_status === 2 ? "danger" : "warning"}>
                                {record?.ride_status === 1 ? "Accepted" : record?.ride_status === 2 ? "Declined" : "Pending"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <button type="button" className="rct-link-btn text-primary">
                                <Link to={`/admin/schedule/${record.auth_id}`}>
                                  <i className="ti-eye"></i>
                                </Link>
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </Fragment>
                  </TableBody>
                </Table>
              )}
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={scheduleCount} onChange={paginate} />
            </div>
          </div>
        )}
        {schedule?.length < 1 && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={'Are you sure you want to Export File?'} message={'This will send the excel file to your email'} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSchedule: (page_no, spinner, start_date, end_date) => dispatch(getSchedule(page_no, spinner, start_date, end_date)),
    getScheduleCount: (start_date, end_date) => dispatch(getScheduleCount(start_date, end_date)),
    exportSchedule: (start_date, end_date) => dispatch(exportSchedule(start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  schedule: state.fdt.schedule,
  scheduleCount: state.fdt.scheduleCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
