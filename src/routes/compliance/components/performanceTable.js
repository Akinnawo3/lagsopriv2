import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";

import { Card, CardTitle, Table } from "reactstrap";
import { getDriversPerformance, getDriversPerformanceCount } from "../../../actions/tripAction";

const PerformanceTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Showing 24 riders</span>
          <div>
            <span>All areas</span>
            <span>Export</span>
          </div>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      <div>
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>% Performance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Fragment>
              {Array.from({ length: 6 }).map((item, index) => (
                <TableRow key={index}>
                  <TableCell>Joanna</TableCell>
                  <TableCell>Lane</TableCell>
                  <TableCell>070 3397 6621 </TableCell>
                  <TableCell>80%</TableCell>
                </TableRow>
              ))}
            </Fragment>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDriversPerformance: (driver_id, page, spinner, start_date, end_date) => dispatch(getDriversPerformance(driver_id, page, spinner, start_date, end_date)),
    getDriversPerformanceCount: (driver_id, page, spinner, start_date, end_date) => dispatch(getDriversPerformanceCount(driver_id, page, spinner, start_date, end_date)),
    // deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
    // getUserCount: (start_date, end_date) => dispatch(getUserCount(start_date, end_date)),
    // getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
    // searchUsers: (searchData) => dispatch(searchUsers(searchData)),
    // ResetUserDetails: (body, emailData) => dispatch(ResetUserDetails(body, emailData)),
    // changeKycStatus: (auth_id, kyc_status) => dispatch(changeKycStatus(auth_id, kyc_status)),
    // sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
  };
}

const mapStateToProps = (state) => ({
  //   users: state.users.users,
  //   userCount: state.users.userCount,
  //   loading: state.loading.loading,
  //   loadingStatus: state.loading.loadingStatus,
  //   dataMode: state.authUser.userProfile.data_mode,
  //   verificationResult: state.idVerification.verificationResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceTable);
