/**
 * Schedule
 */
import React, {useState, useEffect, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFdtCount, getSchedule, getScheduleCount} from "Actions/fdtActions";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {Badge} from "reactstrap";
const qs = require("qs");

const Schedule = ({history, match, getSchedule, schedule, loading, getScheduleCount, scheduleCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
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

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Schedules"} match={match} />
      <RctCollapsibleCard heading={"Schedules"} fullBlock style={{minHeight: "70vh"}}>
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
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSchedule: (page_no, spinner) => dispatch(getSchedule(page_no, spinner)),
    getScheduleCount: () => dispatch(getScheduleCount()),
  };
}

const mapStateToProps = (state) => ({
  schedule: state.fdt.schedule,
  scheduleCount: state.fdt.scheduleCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
