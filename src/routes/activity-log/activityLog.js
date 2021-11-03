import React, { useState, useEffect, Fragment, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { getAdminLogs } from "Actions/userAction";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "@material-ui/core/Button";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import moment from "moment";

const ActivityLog = ({ loading, getAdminLogs, AdminActivityLog, match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getAdminLogs(1, true);
  }, []);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getAdminLogs(pageNumber);
    window.scrollTo(0, 0);
  };

  console.log(AdminActivityLog);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Activities"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Activity Log" fullBlock>
          {AdminActivityLog?.length > 0 && (
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Log ID</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Operation Type</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {AdminActivityLog.map((item, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{item.log_id}</TableCell>
                        <TableCell>
                          { moment(item.createdAt).format('LLLL') }
                          {/* {item.createdAt} */}
                        </TableCell>
                        <TableCell>{item.operation}</TableCell>
                        <TableCell>{item.body}</TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          )}
          {AdminActivityLog?.length < 1 && <EmptyData />}

          {!loading && AdminActivityLog?.length > 0 && (
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination
                activePage={currentPage}
                itemClass="page-item"
                linkClass="page-link"
                itemsCountPerPage={20}
                // totalItemsCount={areaCount}
                totalItemsCount={200}
                onChange={paginate}
              />
            </div>
          )}
        </RctCollapsibleCard>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getAdminLogs: (page_no, loading) =>
      dispatch(getAdminLogs(page_no, loading)),
  };
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  AdminActivityLog: state.users.userActivityLog,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLog);
