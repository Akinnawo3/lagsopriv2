import React, {useState, useEffect, Fragment, useRef} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import DougnutProjection from "./components/doughnut";
import DailyTripsGraph from "./components/dailyTripsGraph";
import TopFive from "./components/topFive";
import PerformanceTable from "./components/performanceTable";
const Compliance = ({match}) => {
  return (
    <div className="table-wrapper mb-3">
      <PageTitleBar title={"Compliance"} match={match} />
      <Row>
        <Col md={8}>
          <Row>
            <Col md={4} className="mt-3">
              <DougnutProjection />
            </Col>
            <Col md={8} className="mt-3">
              <DailyTripsGraph />
            </Col>
            <Col className="mt-3">
              <PerformanceTable />
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mt-3">
          <TopFive />
        </Col>
      </Row>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    // getUsers: (page_no, loading, start_date, end_date) => dispatch(getUsers(page_no, loading, start_date, end_date)),
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

export default connect(mapStateToProps, mapDispatchToProps)(Compliance);